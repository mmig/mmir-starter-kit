
//configuration for the mmir framework that needs to be pre-loaded
// (i.e. before the framework is actually initialized)

(function(core){//<- the core-framework object (global variable: mmir)

  core.config({
		config: {
			'jqmViewEngine': {
				'cssUrl': 'content/css/jquery.mobile-1.4.5.min.css'
			}
		},
		paths:{
			'jqmViewEngine': 'app/jqmViewEngine',
			'jquery': 'libs/jquery-2.2.3',
			'jqm': 'libs/jquery.mobile-1.4.5',
			'jqmSimpleModal': 'libs/jquery.simplemodal-1.4.4'
		},
		shim: {
			//make jQuery mobile requirejs-usable
    	'jqm': ['jquery'],
    	'jqmSimpleModal': ['jqm']
		}
	});

	core.config({

    debugMode: true,

		paths:{
			//overwrite / replace MMIR config values:

			//register a custom rendering module
			// NOTE: the framework also needs to be configured to actually use it (see below for an example)
			'jqViewEngine': 'app/jqSimpleViewEngine',

//			//overwrite the framework's Layout implementation with an app-specific class:
//			'layout': 'app/remoteLayout',

			// as an alternative, i.e. instead of declaring the module-ID here,
			//    the ID can also be declared in
			//      config/configuration.json
			//   (see the entry for "config")
			//'apprenderer': 'app/micrenderer',

			//register a 3rd party library
			'jbox': 'libs/jBox-v0.3.2'

		},
		shim : {

			//add a shim for one of the additional modules
			'jbox': {

				deps: ['loadCss', 'jquery'],
				init: function(loadCss){

					//load stylesheets (async & non-blocking)
					loadCss({href: 'content/css/jbox-themes/TooltipDark.css', id: 'jbox-theme-css'});
					loadCss({href: 'content/css/jBox.css', id: 'jbox-css'});

					return jBox;
				}
			}
		}//,
//		waitSeconds: 200	//DISABLED: increase timeout for requirejs start-up

		//configure the mmir framework
		, config: {
				//set specific debug levels
			    'mmirf/inputManager': {
				    logLevel: 'warn'
			    }
			    , 'mmirf/dialogManager': {
				    logLevel: 'warn'
			    }
			    , 'mmirf/mediaManager': {
				    logLevel: 'debug'
			    }

					, "mmirf/renderUtils": {
  	        "logLevel": "warn"
  	    	}
			}
	});

	//this would set a "custom" rendering engine/implementation
	// (the module "jqmViewEngine" is registered above)
	core.viewEngine = 'jqmViewEngine';
  // // ... example: use simplified jQuery view engine:
	// core.viewEngine = 'jqViewEngine';

	core.logLevel = 'info';
  // //example: show full stack-trace when printing logging entries in console
  // core.logTrace = {trace: true, depth: 'full'};

	//add a listener for Cordova initialization, in order to do something
	// as soon as "Cordova becomes available"
	document.addEventListener("deviceready", function(){
		//NOTE this will only be triggered, if running in a Cordova environment
		console.info('app.deviceready: registering handler-functions that need to be able to handle a "cold-start" of the app...');

		//... do something

	}, false);


})(window.mmir);//<- the global mmir variable is defined/exported in /mmirf/core.js
