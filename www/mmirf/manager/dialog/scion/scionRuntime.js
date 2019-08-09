
/**
 * module for scion-runtime:
 *
 * uses the @scion-scxml's runtime (i.e. @scion-scxml/core):
 * this is only the interpreter, so no support for loading/compiling SCXML files
 * i.e. the SCXML files need to be compiled to the scion-model before running/loading the app
 *  -> this interpreter expects the scion-model at url, not a SCXML file!
 */

define(['mmirf/scionRuntimeLib', 'require'], function(scionInterpreter, require){

var getModel = function(url, callback){
	if(typeof WEBPACK_BUILD !== 'undefined' && WEBPACK_BUILD) setTimeout(function(){//<- simulate async
			try {
				var scxmlModel = __webpack_require__(url);
				callback(null, scxmlModel);
			} catch(err){
				callback(err);
			}
		}, 0);
	else require([url], function(scxmlModel){ callback(null, scxmlModel) }, function(err){ callback(err) })

};

return {
	scion: scionInterpreter,
	core: scionInterpreter,
	pathToModel: getModel,
	urlToModel: getModel
};

});
