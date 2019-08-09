
define(['mmirf/core','mmirf/util/deferred','mmirf/logger','mmirf/engineConfig'],
	/**
	 * Factory for creating state manager, e.g. InputerManger and DialogManager instances.
	 *
	 * @example
	 * //initialization of a custom state manager/engine
	 * var manager = require('mmirf/managerFactory')();
	 * manager.init('mmirf/someStateManager', {modelUri: 'path/to/scxml/file'}, true).then(function(initResult){
	 *   var theEngine = initResult.engine;
	 *   var theManager = initResult.manager;
	 *   //do something ...
	 * });
	 *
	 *
	 * @name mmir.ManagerFactory
	 * @static
	 * @class
	 *
	 * @requires mmir.require
	 * @requires mmir._define
	 *
	 */
	function(
		mmir, deferred, Logger, engineConfig
){


	var _create = function(){

		//the next comment enables JSDoc2 to map all functions etc. to the correct class description
		/** @scope mmir.ManagerFactory.prototype */

		/**
		 * @memberOf mmir.ManagerFactory#
		 */
		var _instance = {

			/** @scope mmir.ManagerFactory.prototype */

			/**
			 * This function raises an event.
			 *
			 * @function
			 * @param {String} eventName
			 * 				The name of the event which is to be raised
			 * @param {Object} [eventData] OPTIONAL
			 * 				Data belonging to the event
			 * @throws {Error} if this function is invoked while the internal
			 * 				   event/state engine (i.e. {@link mmir.InputEngine}
			 * 				   is not initialized yet
			 * @public
			 * @memberOf mmir.ManagerFactory.prototype
			 */
			raise : function(eventName, eventData) {
				//NOTE the functional implementation will be set during initialization (see below #init())
				throw new Error('Not initialized yet: '
						+'call init(callback) and wait for the callback to return.'
				);
			},

			/**
			 * @function
			 * @name init
			 * @returns {Deferred}
			 *
			 * @memberOf mmir.ManagerFactory.prototype
			 */
			_init : function(moduleId, modConf, isRegisterEngine) {

				isRegisterEngine = isRegisterEngine !== false;

				var url = modConf.modelUri;
				var mode = modConf.mode;

				var engineId = modConf.engineId || moduleId.replace(/Manager/i, '') + 'Engine';

				//create a SCION engine:
				var _engine = engineConfig(url, mode);

				this._log = Logger.create(moduleId, modConf.logLevel);
				_engine._logger = Logger.create(engineId, modConf.logLevel);


				var theDeferredObj = deferred();

				_engine.load().then(function(engine) {

					_instance.raise = function raise(){
						engine.raise.apply(engine, arguments);
					};

					if(isRegisterEngine){
						//register the InputEngine with requirejs as module 'mmirf/<manager-type>Engine':
						mmir._define(engineId, function(){
							return engine;
						});
						//immediately load the module-definition:
						mmir.require([engineId], function(){
							//signal end of initialization process:
							theDeferredObj.resolve({manager: _instance, engine: engine});
						});
					} else {
						//signal end of initialization process:
						theDeferredObj.resolve({manager: _instance, engine: engine});
					}

				});

				return theDeferredObj;
			}

		};

		return _instance;

	};

	return _create;

});
