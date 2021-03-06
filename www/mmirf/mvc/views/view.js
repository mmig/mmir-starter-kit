
define ( ['mmirf/commonUtils','mmirf/contentElement','mmirf/storageUtils', 'require'],
	//this comment is needed by jsdoc2 [copy of comment for: function View(...]
	/**
	 * The View class is a kind of interface-class which gives access to the methods and data of a helper (which itself belongs to a controller)<br>
	 * Apart from initializing some properties, the constructor also parses the view description and looks for needed helper methods.
	 *
	 * @constructs View
	 * @param {Object} ctrl
	 * 			Controller instance / object
	 * @param {String} name
	 * 			Name of the View
	 * @param {String} definition
	 * 			View description, i.e. the raw template code that will be processed.
	 * 			May be empty: in this case the processed contents must be
	 * 						  added manually (cf. parser.StorageUtils)
	 *
	 * @requires if param definition is NOT empty: parser.RenderUtils (must be loaded beforehand via <code>require(["mmirf/renderUtils"]...</code>)
	 * @requires if param definition is NOT empty: parser.ParseUtils (must be loaded beforehand via <code>require(["mmirf/parseUtils"]...</code>)
	 *
	 * @name View
	 * @class
	 */
	function(
			commonUtils, ContentElement, parser, require
){
/** @scope View.prototype *///for jsdoc2

//set to @ignore in order to avoid doc-duplication in jsdoc3
/**
 *
 * The View class is a kind of interface-class which gives access to the methods and data of a helper (which itself belongs to a controller)<br>
 * Apart from initializing some properties, the constructor also parses the view description and looks for needed helper methods.
 *
 * @constructs View
 * @param {Object} ctrl
 * 			Controller instance / object
 * @param {String} name
 * 			Name of the View
 * @param {String} definition
 * 			View description, i.e. the raw template code that will be processed.
 * 			May be empty: in this case the processed contents must be
 * 						  added manually (cf. parser.StorageUtils)
 *
 * @requires if param definition is NOT empty: parser.RenderUtils (must be loaded beforehand via <code>require(["mmirf/renderUtils"]...</code>)
 * @requires if param definition is NOT empty: parser.ParseUtils (must be loaded beforehand via <code>require(["mmirf/parseUtils"]...</code>)
 *
 * @ignore
 */
function View(ctrl, name, definition){

//	console.log("[View] '" + name + "' loaded.");
	if(definition){
		// remove HTML comments from View
		definition = definition.replace(commonUtils.regexHTMLComment, '');
	}

	/**
	 * The controller to which this view belongs.
	 *
	 * @type Controller
	 * @public
	 */
	this.controller = ctrl;

	/**
	 * The description of the view in eHTML.
	 *
	 * @type String
	 * @public
	 */
	this.def = definition;

	/**
	 * The name of the view.
	 *
	 * @type String
	 * @public
	 */
	this.name = name;


	/**
	 * An array of all the views {@link mmir.ContentElement} objects.<br>
	 *
	 * @type Array<ContentElement>
	 * @public
	 */
	this.contentFors = new Array();


	/**
	 *
	 * An array of all names of the for the view required helper methods.
	 *
	 * @deprecated helper methods must now explicitly called in template definition (using syntax <code>@helper(name,args)</code>)
	 *
	 * @type Array
	 * @public
	 */
	this.helperMethods = new Array();

	if(this.def){

		var parserUtils = typeof WEBPACK_BUILD !== 'undefined' && WEBPACK_BUILD? __webpack_require__('mmirf/parseUtils') : require('mmirf/parseUtils');
		var renderUtils = typeof WEBPACK_BUILD !== 'undefined' && WEBPACK_BUILD? __webpack_require__('mmirf/renderUtils') : require('mmirf/renderUtils');

		var parseResult = parserUtils.parse(this.def, this);

		for(var i=0, size = parseResult.contentFors.length; i < size ; ++i){
			this.contentFors.push(new ContentElement(parseResult.contentFors[i], this, parserUtils, renderUtils));
		}
	}

};

/**
 * Gets the definition of a view.
 *
 * @function
 * @returns {String} The view description string
 */
View.prototype.getDefinition = function(){
	return this.def;
};


/**
 * Gets the name of a view.
 *
 * @function
 * @returns {String} The name of the view
 */
View.prototype.getName = function(){
	return this.name;
};

/**
 * Gets the name of a view.
 *
 * @function
 * @returns {Object} The controller for the view
 */
View.prototype.getController = function(){
	return this.controller;
};


/**
 * Gets a specific {@link mmir.ContentElement} object by name.
 *
 * @function
 * @param {String} name Name of the ContentElement object
 * @returns {object} The wanted ContentElement object or null
 */
View.prototype.getContentElement = function( name){

	for(var i=0, size = this.contentFors.length; i < size ; ++i){
		if(this.contentFors[i].getName() == name){
			return this.contentFors[i];/////////////////////// EARLY EXIT /////////////////////////////
		}
	}

	return null;

};

/**
 * Gets an array of all helper methods.
 *
 * @function
 * @returns {Array} Array of all helper methods
 */
View.prototype.getHelperMethods = function(){
	return this.helperMethods;
};

View.prototype.stringify = function(){

	// "plain properties" list
	var propList = [
		'name',
		'def'
//		 , 'helperMethods'//DISABLE: this field is deprecated!
	];

	//Array-properties
	var arrayPropList = [
			'contentFors' //element type: ContentElement (stringify-able)
		];

	//function for iterating over the property-list and generating JSON-like entries in the string-buffer
	var appendStringified = parser.appendStringified;

	var moduleNameString = '"'+this.name+this.getController().getName()+'View"';

	var sb = [parser.STORAGE_CODE_WRAP_PREFIX, 'require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/view"', ','];

	appendStringified(this, propList, sb);

	//non-primitives array-properties with stringify() function:
	appendStringified(this, arrayPropList, sb, null, function arrayValueExtractor(name, arrayValue){

		var buf =['['];
		for(var i=0, size = arrayValue.length; i < size; ++i){
			buf.push(arrayValue[i].stringify());
			buf.push(',');
		}
		//remove last comma
		if(arrayValue.length > 0){
			buf.splice( buf.length - 1, 1);
		}
		buf.push(']');

		return buf.join('');
	});

	//NOTE the use of require() here, assumes that the dependency has already been loaded (i.e. has already been request by some other module!)
	sb.push( 'initPublish: function(){ require("mmirf/presentationManager").addView(this.getController(), this); }');
	sb.push(',');

	//TODO is there a better way to store the controller? -> by its contoller's name, and add a getter function...
	if(this['controller']){

		//getter/setter function for controller
		//  (NOTE: this init-function needs to be called before controller can be accessed!)
		sb.push( 'initController: function(){');

		// store controller-name:
		sb.push( ' var ctrlName = ');
		sb.push( JSON.stringify(this.getController().getName()) );

		// ... and the getter/setter code:
		sb.push( '; this.controller = require("mmirf/controllerManager").get(ctrlName); },' );//TODO see remark about use of require() above

		//add initializer function
		//  (NOTE: needs to be called before controller or renderer can be accessed!)
		sb.push( 'init: function(){');
		sb.push( ' this.initController(); ' );
		sb.push( ' }' );

		//NOTE: need to add comma in a separate entry
		//      (-> in order to not break the removal method of last comma, see below)
		sb.push( ',' );
	}

	//if last element is a comma, remove it
	if(sb[sb.length - 1] === ','){
		sb.splice( sb.length - 1, 1);
	}

	//TODO use requirejs mechanism? (see remark above)
//	sb.push(' }, true); });\n require(['//<- add require-call, so that this JS-file adds itself to the loaded dependencies in requirejs
//			+ moduleNameString + ']);');

	sb.push(' }, true, '+parser.STORAGE_FILE_FORMAT_NUMBER+');');
	sb.push(parser.STORAGE_CODE_WRAP_SUFFIX);

	return sb.join('');
};



/**
 * Gets an array of all helper methods.
 *
 * @deprecated helper methods must now explicitly called in template definition (using syntax <code>@helper(name,args)</code>)
 *
 * @function
 * @returns {Array} Array of all helper methods
 */
View.prototype.getHelperMethods = function(){
	return this.helperMethods;
};

/**
 * Executes all helper methods that were specified / referenced in the view; with **data** as parameter.
 *
 * @deprecated helper methods must now explicitly called in template definition (using syntax <code>@helper(name,args)</code>)
 *
 * @function
 * @param {Object} data Parameter to pass to the helper methods
 */
View.prototype.executeHelperMethods = function(data){
	for(var i=0, size = this.getHelperMethods().length; i < size ; ++i){
		this.controller.performHelper(this.getHelperMethods()[i], data);
	}
};

return View;

});//END: define(..., function(){
