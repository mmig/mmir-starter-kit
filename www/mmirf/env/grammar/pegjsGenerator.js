
define(['mmirf/pegjs','mmirf/configurationManager','mmirf/grammarConverter','mmirf/util/deferred','mmirf/util/extend','mmirf/util/toArray','mmirf/logger', 'module'],
/**
 * Generator for executable language-grammars (i.e. converted JSON grammars).
 *
 * <p>
 * This generator uses PEG.js for compiling the JSON grammar.
 *
 * <p>
 * The generator for compiling the JSON grammar definitions in <code>www/config/languages/&lt;language code&gt;/grammar.json</code>
 * can be configured in <code>www/config/configuration.json</code>:<br>
 * <pre>
 * {
 *   ...
 *   "grammarCompiler": "pegjs",
 *   ...
 * }</pre>
 *
 * <p>
 * PEGjs supports grammar generation for:
 * PEG (Parsing Expression Grammar)
 *
 * NOTE: PEG is a different formalism than "classical" context-free grammar definitions/formalisms;
 * see also <a href="http://en.wikipedia.org/wiki/Parsing_expression_grammar">explanation of PEG in Wikipedia</a>
 *
 * @see PEGjs homepage at <a href="http://pegjs.majda.cz/">http://pegjs.majda.cz/</a>
 *
 * @class
 * @constant
 * @public
 * @name PegJsGenerator
 * @memberOf mmir.env.grammar
 *
 * @requires PEG.js
 */
function(pegjs, configManager, GrammarConverter, deferred, extend, toArray, Logger, module){

/**
 * Deferred object that will be returned - for async-initialization:
 * the deferred object will be resolved, when this module has been initialized.
 *
 * @private
 * @type Deferred
 * @memberOf PegJsGenerator#
 */
var deferred = deferred();
//no async initialization necessary for PEG.js generator -> resolve immediately
deferred.resolve();

/**
 * The Logger for the PEGjs generator.
 *
 * @private
 * @type Logger
 * @memberOf PegJsGenerator#
 *
 * @see mmir.Logging
 */
var logger = Logger.create(module);

/**
 * The default options for the PEGjs compiler.
 *
 * To overwrite the default options, configure the following property in <code>www/config/configuration.json</code>:<br>
 * <pre>
 * {
 *   ...
 *   "grammar": {
 *   	...
 *   	"pegjs": {
 *   		"cache": [true | false], 			// "If true, makes the parser cache results, avoiding exponential parsing time in pathological cases but making the parser slower" - DEFAULT false
 *   		"optimize": ["speed" | "size"], 	//optimizing the generated parser for speed or (code) size - DEFAULT "speed"
 *   		"output": ["source" | "parser"], 	//should not be changed!!! whether to return TEXT or evaluated JavaScript - DEFAULT: "source"
 *   		"allowedStartRules": RULE_NAMES 	//should not be changed!!! - DEFAULT: not set
 *   	}
 *   	...
 *   },
 *   ...
 * }</pre>
 *
 * non-specific compiler options:
 * <code>execMode = 'sync' | 'async'</code>
 * <code>genSourceUrl = true | STRING | FALSY'</code>
 *
 *
 * @constant
 * @private
 * @default cache := false, optimize := 'speed', output := 'source', allowedStartRules := undefined
 * @memberOf PegJsGenerator#
 */
var DEFAULT_OPTIONS = {
	cache:    false,
	optimize: "speed",
	output:   "source",
//	allowedStartRules: void(0), FIXME DISABLED: pegjs actually evaluates this value, if it present (even if it is undefined/FALSY)
	execMode: 'sync',//'sync' | 'async' | default: sync
	genSourceUrl: '',// true | STRING: the sourceURL for eval'ed parser-module | default: FALSY
};

/**
 * Name for this plugin/grammar-generator (e.g. used for looking up configuration values in configuration.json).
 * @constant
 * @private
 * @memberOf PegJsGenerator#
 */
var pluginName = 'grammar.pegjs';

/**
 * Exported (public) functions for the PEGjs grammar-engine.
 * @public
 * @type GrammarGenerator
 * @memberOf PegJsGenerator#
 */
var pegjsGen = {
	/** @scope PegJsGenerator.prototype */

	/**
	 * The name/ID for the compile engine for the PEG.js compiler
	 *
	 * @memberOf mmir.env.grammar.PegJsGenerator.prototype
	 */
	engineId: 'pegjs',
	/**
	 * @param {Function} [callback] OPTIONAL
	 * 			the callback that is triggered, when the engine is initialized
	 * @returns {Deferred}
	 * 			a promise that is resolved, when the engine is initialized
	 * 			(NOTE: if you use the same function for the <code>callback</code> AND the promise,
	 * 			       then the function will be invoked twice!)
	 *
	 * @memberOf mmir.env.grammar.PegJsGenerator.prototype
	 */
	init: function(callback){
		if(callback){
			deferred.then(callback, callback);
		}
		return deferred;
	},
	/** @returns {Boolean} if this engine compilation works asynchronously. The current implementation works synchronously (returns FALSE) */
	isAsyncCompilation: function(){ return false; },
	/**
	 * The function for compiling a JSON grammar:
	 *
	 *
	 * @param {GrammarConverter} theConverterInstance
	 * @param {String} instanceId
	 * 				the ID for the compiled grammar (usually this is a language code)
	 * @param {Number} fileFormatVersion
	 * 				the version of the file format (this is a constant within {@link mmir.SemanticInterpreter}
	 * @param callback
	 * @returns {GrammarConverter}
	 * 			the grammar instance with attached with the compiled function for executing the
	 * 			grammar to the instance's {@link GrammarConvert#executeGrammar} property/function.
	 */
	compileGrammar: function(theConverterInstance, instanceId, fileFormatVersion, callback){

		//attach functions for PEG.js conversion/generation to the converter-instance:
		extend(theConverterInstance, PegJsGrammarConverterExt);

		//start conversion: create grammar in PEG.js syntax (from the JSON definition):
		theConverterInstance.init();
		this._preparePrintError();
		theConverterInstance.convertJSONGrammar();
		var grammarDefinition = theConverterInstance.getGrammarDef();

		//load options from configuration:
		var config = configManager.get(pluginName, {});
		//combine with default default options:
		var options = extend({id: instanceId}, DEFAULT_OPTIONS, config);

		var compileParserModule = function(grammarParser, hasError){

			var addGrammarParserExec = theConverterInstance.getCodeWrapPrefix(fileFormatVersion, JSON.stringify(options.execMode))
				+ 'var parser = '
				+ grammarParser
				+ ';\n'
						+ 'function _printLog(){console.log.apply(console, arguments);};\n'
						+ 'function _noopFunc(){};\n'
						+ 'var _logDebug = _noopFunc;\n'
						+ 'var grammarFunc = function(inputStr, options){\n'
						// + '  options = options || {debug: true, trace: function(msg){window.alert(msg)}};\n' //TEST
						+ '  _logDebug = options && options.debug? _printLog : _noopFunc;\n'
				+ '  var result;  try {\n'
				+ '    result = parser.parse.call(this, inputStr, options);\n'
				+ '  } catch (err){\n'
				+ '    result = {error: err, phrase: inputStr, engine: "pegjs"};\n'//TODO warning/error messaging? -> need to handle encoded chars, if error message should be meaningful
				+ '  }\n'
				+ '  return result;\n'
				+ '};\n'
				+ theConverterInstance.getCodeWrapSuffix(theConverterInstance.getEncodedStopwords(), 'grammarFunc', instanceId);

			if(options.genSourceUrl){

				var sourceUrlStr;
				if(options.genSourceUrl === true){
					sourceUrlStr = 'gen/grammar/_compiled_grammar_'+instanceId;
				} else {
					sourceUrlStr = options.genSourceUrl.toString().replace(/<id>/g,instanceId);
				}

				//for Chrome / FireFox debugging: provide an URL for eval'ed code
				addGrammarParserExec += '//@ sourceURL='+sourceUrlStr+'\n'
										+'//# sourceURL='+sourceUrlStr+'\n';

			}

			theConverterInstance.setGrammarSource(addGrammarParserExec);

			try{

				eval(addGrammarParserExec);

			} catch (err) {

				//TODO russa: generate meaningful error message with details about error location
				//			  eg. use esprima (http://esprima.org) ...?
				//			... as optional dependency (see deferred initialization above?)

				var evalMsg = 'Error during eval() for "'+ instanceId +'": ' + err;

				if(pegjs.printError){
					pegjs.printError(evalMsg);
				}
				else {
					logger.error('PEGjs', 'evalCompiled', evalMsg, err);
				}

				if(! hasError){
					evalMsg = '[INVALID GRAMMAR JavaScript CODE] ' + evalMsg;
					var parseDummyFunc = (function(msg, error){
						return function(){ console.error(msg); console.error(error); throw msg;};
					})(evalMsg, err);

					parseDummyFunc.hasErrors = true;

					theConverterInstance.setGrammarFunction(parseDummyFunc);
				}

			}

			//invoke callback if present:
			if(callback){
				callback(theConverterInstance);
			}
		};

		var isPreventDefault = this._afterCompileParser(compileParserModule, callback);
		var result = this._compileParser(grammarDefinition, options, isPreventDefault);

		if(!isPreventDefault){
			var hasError = result.hasError;
			compileParserModule(result.def, hasError);
		}

		return theConverterInstance;
	},
	/**
	 * @protected
	 */
	_compileParser: function(grammarDefinition, options, afterCompileParserResult){

		var hasError = false;
		var grammarParser;
		try{
			grammarParser = pegjs.generate(grammarDefinition, options);
		} catch(error) {
//        	"{
//        	  "message": "Expected \"=\" or string but \"_\" found.",
//        	  "expected": [
//        	    {
//        	      "type": "literal",
//        	      "value": "=",
//        	      "description": "\"=\""
//        	    },
//        	    {
//        	      "type": "other",
//        	      "description": "string"
//        	    }
//        	  ],
//        	  "found": "_",
//        	  "location": {
//        	  	"start": {
//        	  		"offset": 1233,
//        	  		"line": 26,
//        	  		"column": 5
//        	  	},
//        	  	"end": {
//        	  		"offset": 1234,
//        	  		"line": 26,
//        	  		"column": 6
//        	  	}
//        	  },
//        	  "name": "SyntaxError"
//        	}"
			hasError = true;
			var msg = ' while compiling grammar "' + options.id+ '": ';
			if(error.name === 'SyntaxError'){
				msg= 'SyntaxError' + msg + error.message;
			}
			else {
				msg = 'Error' + msg + (error && error.stack? error.stack : error);
			}

			var loc = (error.location && (error.location.start || error.location.end)) || error;
			if(typeof loc.line !== 'undefined'){
				msg += ' at line '+loc.line;
			}

			if(typeof loc.column !== 'undefined'){
				msg += ':'+loc.column;
			}

			if(typeof loc.offset !== 'undefined'){
				msg += ' (offset '+loc.offset+')';
			}

					msg += '\n-----------------------------\n  Grammar Definition:\n-----------------------------\n' + grammarDefinition;

			if(pegjs.printError){
				pegjs.printError(msg);
			}
			else {
				console.error(msg);
			}

			msg = '[INVALID GRAMMAR] ' + msg + (error && error.name === 'SyntaxError' && error.stack? error.stack : '');
			grammarParser = '{ parse: function(){ var msg = '+JSON.stringify(msg)+'; console.error(msg); throw msg;} }';
		}

		return {def: grammarParser, hasError: hasError};
	},
	/**
	 * @protected
	 */
	_preparePrintError: function(){
		//setup logger for compile errors, if not already set
		if(! pegjs.printError){
			/**
			 * The default logging / error-print function for PEGjs.
			 *
			 * @private
			 * @name printError
			 * @function
			 * @memberOf PegJsGenerator.pegjs#
			 *
			 * @see mmir.Logging
			 */
			pegjs.printError = function(){
				var args = toArray(arguments);
				//prepend "location-information" to logger-call:
				args.unshift('PEGjs', 'compile');
				//output log-message:
				logger.error.apply(logger, args);
			};
		}
	},
	/**
	 * The default logging / error-print function for PEGjs.
	 *
	 * @protected
	 *
	 * @see mmir.Logging
	 */
	printError: function(){
		if(pegjs.printError){
			pegjs.printError.apply(pegjs, arguments);
		} else {
			console.error(arguments);
		}
	},
	/**
	 * Optional hook for pre-processing the generated parser, after the parser is generated.
	 *
	 * By default, this function returns VOID, in which case the parser-module is created by default.
	 *
	 * If a function is returned instead, then it must invoke <code>compileParserModuleFunc</code>:
	 * <code>compileParserModuleFunc(compiledParser : STRING, hasErrors : BOOLEAN)</code>
	 *
	 *
	 * @param {Function} compileParserModuleFunc
	 * 				the function that generates the parser-module:
	 * 				<code>compileParserModuleFunc(compiledParser : STRING, hasErrors : BOOLEAN)</code>
	 *
	 * @param {Function} compileCallbackFunc
	 * 				the callback function which will be invoked by compileParserModuleFunc, after it has finished.
	 * 				If compileParserModuleFunc() is prevented from exectution then the callback MUST be invoked manually
	 * 				<code>compileCallbackFunc(theConverterInstance: GrammarConverter)</code>
	 *
	 * @returns {TRUTHY|VOID}
	 * 				FALSY for the default behavior.
	 * 				IF a TRUTHY value is returned, then the default action after compiling the parser
	 * 				is not executed:
	 * 					i.e. compileParserModuleFunc is not automatically called and in consequence the callback is not invoked
	 *
	 *
	 * 				NOTE: if not FALSY, then either compileParserModuleFunc() must be invoked, or the callback() must be invoked!
	 *
	 * @protected
	 */
	_afterCompileParser: function(compileParserModuleFunc, compileCallbackFunc){
		//default: return VOID
		return;
	}
};


////////////////////////////////////// PEG.js specific extensions to GrammarConverter ////////////////////////////////
/**
 * PEGjs specific extension / implementation for {@link GrammarConverter} instances
 *
 * @type GrammarConverter
 * @memberOf PegJsGenerator#
 */
var PegJsGrammarConverterExt = {
	/** @memberOf PegJsGrammarConverterExt */
	init: function(){

		this.THE_INTERNAL_GRAMMAR_CONVERTER_INSTANCE_NAME = "theGrammarConverterInstance";
		this._WHITESPACE_TOKEN_NAME = "WS";
		this._PARTIAL_MATCH_PREFIX = "_r";
		this.grammar_tokens = "/* --- Token definitions --- */\n\n/* Characters to be ignored */\n"
			+ this._WHITESPACE_TOKEN_NAME +" = ' '/'\\t';\n\n/* Non-associative tokens */\n";

		this.grammar_utterances = "";
		this.grammar_phrases = "phrases\n    = ";
		this.token_variables = "{\n  var " + this.variable_prefix + "result = '';\n";
		this.tokens_array = [];

	},
	convertJSONGrammar: function(){

		this.json_grammar_definition = this.maskJSON(this.json_grammar_definition);

		this.token_variables += "  var semanticAnnotationResult = {};\n"
			+ "  var _flatten = function(match){ if(!match.join){ return match;} for(var i=0, size = match.length; i < size; ++i){if(!match[i]){continue;}if(match[i].join){match[i] = _flatten(match[i])}} return match.join('') };\n"
			+ "  var _tok = function(field, match){ match = _flatten(match); field[match] = match; return match;}\n"
			+ "  var _offset = function(pos, str){return pos.start.offset;};\n"

			+ "  var _tokenList = function(match, list) {if(!list){list = [];}var size = match.length, t;for (var i = 0; i < size; ++i) {t = match[i];if (!t) {continue;}if (t."+this.entry_token_field+".join) {_tokenList(t."+this.entry_token_field+", list);} else {list.push(t."+this.entry_token_field+");}}return list;};\n"
			+ "  var _getTok = function(phrases, type, index) {var count = 0, p;for(var i=0, size = phrases.length; i < size; ++i){p = phrases[i];if(p."+this.entry_type_field+" === type){if(index === count++){return typeof p."+this.entry_token_field+" === 'string'? p."+this.entry_token_field+" : p;}}}};\n"
		;

		this.parseTokens();
		this.parseUtterances();
		this.parseStopWords();

		this.jscc_grammar_definition = this.token_variables
				+ "}\n\n"
				+ "\n\n/* --- Grammar specification --- */\n\nutterance\n    = phrases    {  "

				+ "_logDebug(" + this.variable_prefix + "result); "

				+ "semanticAnnotationResult.result = "
				+ this.variable_prefix + "result; return "+ this.variable_prefix +"result;} ;\n\n" + this.grammar_utterances
				+ "\n" + this.grammar_phrases + ";\n\n"
				+ this.grammar_tokens;

		this.json_grammar_definition = this.unmaskJSON(this.json_grammar_definition);
	},
	parseTokens: function(){
		var self = this;
		var json_tokens =  this.json_grammar_definition.tokens;
		var pref = self.variable_prefix;


		for(token_name in json_tokens){

			var words = json_tokens[token_name];

			self.token_variables += "  var " + pref
					+ token_name.toLowerCase() + " = [];\n";

			var sb = [token_name, "\n    = _m:("];

			var isNotRegExpr = true;
			for(var i=0, size = words.length; i < size ; ++i){

				//NOTE RegExpr need to be recoded -> need to check, if current word is RegExp!
				//  example (see also _convertRegExpr()):
				//	INPUT:   '[a-zA-Z_]+'
				//	RECODED: [a-zA-Z_]+
				isNotRegExpr = this._checkIfNotRegExpr(words[i]);
				if( isNotRegExpr ){
					sb.push("'");
				}

				//add TOKEN string:
				sb.push( isNotRegExpr? this._prepareToken(words[i]) : this._convertRegExpr(words[i]));


				if( isNotRegExpr ){
					sb.push("'");
				}

				//if there is another word following, add OR operator
				if(i < size-1){
					sb.push("/");
				}
			}

			//close assignment for "= match:(" and create JavaScript processing for token
			sb.push(
				")  { var res = _tok(" + pref + token_name.toLowerCase() + ", _m); return {"
					+ this.entry_index_field + ": _offset(location()),"
					+ this.entry_type_field + ": '" + token_name.toLowerCase() + "',"
					+ this.entry_token_field + ": res"
				+"}; };\n"
			);

			self.grammar_tokens += sb.join("");
		}
	},
	parseUtterances: function(){
		var self = this;
		var utt_index = 0;
		var json_utterances =  this.json_grammar_definition.utterances;

		for(var utterance_name in json_utterances){
			var utterance_def = json_utterances[utterance_name];
			if(utt_index > 0){
				self.grammar_phrases += "\n\t/";
			}
			utt_index++;
			self.doParseUtterance(utterance_name, utterance_def);
		}
	},
	doParseUtterance: function(utterance_name, utterance_def){

		var self = this;

		self.token_variables += "  var " + self.variable_prefix
				+ utterance_name.toLowerCase() + " = [];\n";


		var grammar_utterance = utterance_name + "\n   = ";
		//self.grammar_phrases += utterance_name + "  " +  self.doCreateSemanticInterpretationForUtterance(utterance_name, utterance_def);
		self.grammar_phrases += utterance_name + "  " ;
		var phrases = utterance_def.phrases;
		var semantic  = self.doCreateSemanticInterpretationForUtterance(utterance_name, utterance_def);

		for(var index=0,size=phrases.length; index < size; ++index){
			if(index > 0){
				grammar_utterance += "\n  / ";
			}
			var phrase = phrases[index];
			var semantic_interpretation = self.doCreateSemanticInterpretationForPhrase(
					utterance_name.toLowerCase(), utterance_def, phrase, semantic
			);
			grammar_utterance += /*phrase +*/ semantic_interpretation;
		}
		self.grammar_utterances += grammar_utterance + ";\n\n";
	},
	doCreateSemanticInterpretationForUtterance: function(utterance_name, utterance_def){
		var semantic = utterance_def.semantic,
		variable_index, variable_name;

		if(logger.isDebug()) logger.debug('doCreateSemanticInterpretationForUtterance: '+semantic);//debug

		var semantic_as_string = JSON.stringify(semantic);
		if( semantic_as_string != null){
		this.variable_regexp.lastIndex = 0;
		var variables = this.variable_regexp.exec(semantic_as_string);
		while (variables != null) {
			var variable = variables[1],
			remapped_variable_name = "";

			if(logger.isDebug()) logger.debug("variables " + variable, semantic_as_string);//debug

			variable_index = /\[(\d+)\]/.exec(variable);
			variable_name = new RegExp('_\\$([a-zA-Z_][a-zA-Z0-9_\\-]*)').exec(variable)[1];
//			variableObj = /_\$([a-zA-Z_][a-zA-Z0-9_\-]*)(\[(\d+)\])?(\["semantic"\]|\['semantic'\]|\.semantic)?/.exec(variable);
//			variableObj = /_\$([a-zA-Z_][a-zA-Z0-9_\-]*)(\[(\d+)\])?((\[(("(.*?[^\\])")|('(.*?[^\\])'))\])|(\.(\w+)))?/.exec(variable);
	//"_$NAME[INDEX]['FIELD']":  _$NAME                  [ INDEX ]        [" FIELD "]  | [' FIELD ']      |   .FIELD
			if (variable_index == null) {
				remapped_variable_name = "return " + variable;
			} else {
					//TODO replace try/catch with safe_acc function
					//     PROBLEM: currently, the format for variable-access is not well defined
					//              -> in case of accessing the "semantic" field for a variable reference of another Utterance
					//                 we would need another safe_acc call
					//				   ... i.e. need to parse expression for this, but since the format is not well defined
					//				   we cannot say, for what exactly we should parse...
					//                 NORMAL VAR EXPR: 		_$a_normal_token[0]
					//                 ACCESS TO SEMANTICS: 	_$other_utterance[0]['semantic']
					//                                      but this could also be expressed e.g. as _$other_utterance[0].semantic
					//                                      ...
//					remapped_variable_name = variable.replace(
//							  '[' + variable_index[1] + ']'
//							, "[safe_acc("
//								+ utterance_name.toLowerCase() + "_temp, 'phrases', '"
//								+ variable_name.toLowerCase() + "', "
//								+ variable_index[1]
//								+ ")]"
//							);
					remapped_variable_name = "var res = _getTok("+utterance_name.toLowerCase() + "_temp['phrases'],'"
									+ variable_name.toLowerCase() + "', "
									+ variable_index[1]+");"
									+ " return typeof res === 'string'? res : (typeof res === 'object' && res? "+variable+" : void(0))";
			}
			semantic_as_string = semantic_as_string.replace(
					variables[0],
					//TODO replace try/catch with safe_acc function
					" function(){try{ " + remapped_variable_name
					+ ";} catch(e){return void(0);}}() "
			);
			variables =  this.variable_regexp.exec(semantic_as_string);
		}
		}
		return semantic_as_string;
	},
	doCreateSemanticInterpretationForPhrase: function(utterance_name, utterance_def, phrase, semantic_as_string){
		var phraseList = phrase.split(/\s+/),
			length = phraseList.length;

		var phraseStr = "";
		var i = 0;


		var pharseMatchResult = "var _m = {"
				+ this.entry_index_field + ": "+ this._PARTIAL_MATCH_PREFIX +"1."+this.entry_index_field+","
				+ this.entry_type_field + ": '" + utterance_name + "',"
				+ this.entry_token_field + ": null";

		var semanticProcResult = "var "+utterance_name+"_temp = {}, tempMatch; "+utterance_name+"_temp['phrases'] = [];";
		var num;
		for (i = 0; i < length; ++i) {

			num = i+1;

			//create STRING for phrase-matching
			if(i > 0){
				phraseStr += " " + this._WHITESPACE_TOKEN_NAME + " ";
			}
			phraseStr += this._PARTIAL_MATCH_PREFIX + num + ":" + phraseList[i];

			//create STR for semantic processing of phrase
			semanticProcResult += "tempMatch = " + this._PARTIAL_MATCH_PREFIX + num + ";"
						+ utterance_name + "_temp['phrases'].push(tempMatch);\n\t\t";
		}

		pharseMatchResult += "}";

		semanticProcResult += "_m.tok = " + utterance_name + "_temp['phrases'];"
				+ utterance_name + "_temp['phrase']=_tokenList("+utterance_name + "_temp['phrases']).join(' ');"
				+ utterance_name + "_temp['utterance']='" + utterance_name + "'; "
				+ utterance_name + "_temp['engine']='pegjs'; "
				+ utterance_name + "_temp['semantic'] = " + semantic_as_string
				+ "; " + this.variable_prefix + utterance_name + ".push(" + utterance_name + "_temp); "
				+ this.variable_prefix + "result = " + utterance_name + "_temp";

		return phraseStr + " {\n\t   " + pharseMatchResult +  "; " + semanticProcResult + "; return _m; \n\t} ";
	},
	_prepareToken: function(token){
		//need to mask delimiting quotes, i.e. '
		return token.replace(/'/g, "\\'");
	},
	_checkIfNotRegExpr: function(token){

		//test for character-group
		if( ! /([^\\]\[)|(^\[).*?[^\\]\]/.test(token)){

			//test for grouping
			if( ! /([^\\]\()|(^\().*?[^\\]\)/.test(token) ){

				//try for single-characters that occur in reg-expr FIXME this may procude false-positives!!!
				return ! /[\?|\*|\+|\^|\|\\]/.test(token); //excluded since these may be more common in natural text: . $
			}
		}

		return false;
	},
	_convertRegExpr: function(token){
		var sb = [], ch, last = null, isString = false, isGroup = false, isEsc = false, hasOr = false;
		for(var i=0, size = token.length; i < size; ++i){
			ch = token.charAt(i);
			switch(ch){
			case '(':
			case ')':
			case '[':
			case ']':
			case '+':
			case '*':
			case '?':
			case '$':
			case '^':
			case '.':
			case '|':
				if(last !== '\\'){

					//if changed from STRING -> non-STRING, then "close" string first:
					if(isString){

						//for "optional" expression: modify previous entry to be a single character-sequence
						// ...cars'?  -> ...car' 's'?
						if(ch === '?' && sb.length > 0){//TODO also for '+', '*', ...???
							sb[ sb.length - 1 ] = '\' \'' + sb[ sb.length - 1 ];
						}

						sb.push("' ");
						isString = false;
					}

					//insert reg-expr symbol
					if(ch !== '|'){
						sb.push(ch);
					}
					else {
						sb.push(' / ');
						hasOr = true;
					}

					//is character-group opening/closing?
					if(isGroup && ch === ']'){
						isGroup = false;
					}
					else if(!isGroup && ch === '['){
						isGroup = true;
					}


					break;
				}
				else {
					isEsc = true;
				}
			default:

				if(isEsc){
					sb.splice(sb.length-1);//remove last element, i.e. the escape-character
					isEsc = false;
				}

				//if changed from non-STRING -> STRING, then "open" string now:
				if(!isGroup && !isString){
					sb.push(" '");
					isString = ! isGroup;
				}
				sb.push(ch);
			}

			last = ch;
		}

		//if last char was a STRING, "close" string now:
		if(isString){
			sb.push("'");
		}
		if(hasOr){
			sb.unshift('(');
			sb.push(')');
		}
		return sb.join('');
	}
};


return pegjsGen;

});
