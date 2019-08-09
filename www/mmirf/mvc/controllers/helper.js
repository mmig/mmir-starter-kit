
define(
	//this comment is needed by jsdoc2 [copy of comment for: function Helper(...]
	/**
	 * The Helper Class is a kind of interface-class which gives access to the methods and data of a helper (which itself belongs to a controller)<br>
	 *
	 * @param {Controller} ctrl Controller instance / object
	 * @param {String} name Name of the Helper
	 * @param {Function} instanceConstr the constructor for creating a new helper instance
	 *
	 * @name Helper
	 * @class
	 */
	function(
){
	//the next comment enables JSDoc2 to map all functions etc. to the correct class description
	/** @scope Helper.prototype */

	//set to @ignore in order to avoid doc-duplication in jsdoc3
	/**
	 * The Helper Class is a kind of interface-class which gives access to the methods and data of a helper (which itself belongs to a controller)<br>
	 *
	 * @constructs Helper
	 * @param {Controller} ctrl Controller instance / object
	 * @param {String} name Name of the Helper
	 * @param {Function} instanceConstr the constructor for creating a new helper instance
	 *
	 * @ignore
	 */
	function Helper(ctrl, name, instanceConstr){

		/**
		 * The name of the helper.
		 *
		 * @type String
		 * @public
		 */
		this.name=name;

		/**
		 * The controller to which this helper belongs.
		 *
		 * @type Controller
		 * @public
		 */
		this.controller = ctrl;

		/**
		 * The definition of the helper object, i.e. its implementation,
		 * containing all properties and functions of the controller.<br>
		 *
		 * A method of the helper can be called via:
		 * <pre>
		 * 	this.impl.method(parameter);
		 * </pre>
		 *
		 * @type Object
		 * @public
		 */
		this.impl = new instanceConstr(this);

		/**
		 * @deprecated use {@link #impl} instead
		 * @protected
		 */
		this.script = this.impl;
	}


	/**
	 * This function performs an action of a helper.<br>
	 *
	 * @function
	 * @param {String} actionName Name of the method to be executed
	 * @param {Object} data Data to pass to the method of the helper as argument
	 * @returns {Object} The return value of the executed method
	 * @public
	 */
	Helper.prototype.perform = function(actionName, data){

//		if(logger.isv()) logger.v("should perform '" + actionName + "' of '" + this.name + "'" + ((typeof data !== 'undefined' && data !== null)? " with data: "+JSON.stringify(data): ""));//debug

		if(arguments.length > 2){
			return this.impl[actionName](this.controller, data, arguments[2]);
		}
		else {
			return this.impl[actionName](this.controller, data);
		}
	};


	return Helper;

});//END: define(...
