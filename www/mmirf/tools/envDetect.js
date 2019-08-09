
/**
 * Exports the current runtime environment, by processing
 * the query-params of the URL (<code>window.location.search</code>
 *
 *  currently supported settings are
 *  <ul>
 *  	<li>browser</li>
 *  	<li>cordova</li>
 *  	<li>android</li>
 *  	<li>ios</li>
 *  </ul>
 *
 *  @exports {Object} a singleton object with information about the runtime setting:
 *  		<pre>{
 *  			isBrowserEnv: [true|false],
 *  			isCordovaEnv: [true|false],
 *  			platform: ["browser" | "android" | "ios" | "node" | "default"],
 *  		}</pre>
 */
define(['mmirf/paramsParseFunc'], function(paramsParseFunc) {

	var ctx = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : this;
	var paramsStr = ctx && ctx.location? ctx.location.search : '?env=node';
	var params = paramsParseFunc( paramsStr );

	var isBrowserEnv;
	var isCordovaEnv;
	var isNodeEnv;
	var envSetting = '';
	var envParamSetting = '';

	if(typeof cordova !== 'undefined'){
		envSetting = cordova.platformId? cordova.platformId : envSetting;
		isCordovaEnv = true;
	}

	if(params.has('env')){

		envParamSetting = params['env'];
		envSetting = !envSetting? envParamSetting : envSetting;
	}

	if(envSetting){

		if(envSetting === 'browser'){
			isBrowserEnv = true;
		}
		else {
			isBrowserEnv = false;
		}

		if(envSetting === 'cordova' || envSetting === 'android' || envSetting === 'ios' || envSetting === 'windows'){
			isCordovaEnv = true;
//			isBrowserEnv = false;
		}
		else {
			isCordovaEnv = false;
		}

		if(envSetting === 'node'){
			isNodeEnv = true;
		}
		else {
			isNodeEnv = false;
		}
	}
	else {
		isBrowserEnv = true;
		isCordovaEnv = false;
		isNodeEnv = false;
	}

	var env;
	if(isBrowserEnv){
		env = 'browser';
	} else {

		//if available, use plugin cordova-plugin-device for detecting specific env
		if(typeof device !== 'undefined' && device.platform){

			var platform = device.platform;
			if(/\bios\b/i.test(platform)){
				env = 'ios';
			} else if(/\bandroid\b/i.test(platform)){
				env = 'android';
			} else if(/\bwindows\b/i.test(platform)){
				env = 'windows';
			} else {//TODO handle other platforms
				console.warn('Unknown platform "'+platform+'"');
				env = 'default';
			}

		} else if(typeof navigator !== 'undefined') {

			//fallback: use UserAgent for detecting env
			var userAgent = navigator.userAgent;
			if(/(iPad|iPhone|iPod)/ig.test(userAgent)){
				env = 'ios';
			} else if(/android/i.test(userAgent)){
				env = 'android';
			} else if(/MSAppHost/i.test(userAgent)){
				env = 'windows';
			} else {//TODO handle other platforms
				console.warn('Unknown platform for userAgent "'+userAgent+'"');
				env = 'default';
			}

		} else if(isNodeEnv) {
			env = 'node';
		} else {//TODO handle other platforms
			console.warn('Unknown platform');
			env = 'default';
		}

	}

	return {
		isBrowserEnv: isBrowserEnv,
		isCordovaEnv: isCordovaEnv,
		isNodeEnv: isNodeEnv,
		envSetting: envSetting,
		platform: env
//	, params : params
	};
});
