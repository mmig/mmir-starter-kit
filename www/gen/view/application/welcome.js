
;(function(global){
var mmirName = typeof MMIR_CORE_NAME === "string"? MMIR_CORE_NAME : "mmir";
var mmir = global? global[mmirName] : void(0);
var require = mmir && mmir.require? mmir.require : (typeof requirejs !== "undefined"? requirejs : (global? global.require : require));
var require = mmir && mmir.require? mmir.require : require;
require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/view",name:"welcome",def:"@contentFor(\"header\"){\r\n   <h1>\r\n      @localize(\"welcome_header\")\r\n   </h1>\r\n   \r\n}@\r\n\r\n@contentFor(\"content\"){\r\n\r\n<div class=\"app_content\">\r\n   <h2>\r\n      @localize(\"welcome_text\")@(mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '')\r\n   </h2>\r\n   <button id=\"appointmentButton\" name=\"appointment_btn\" data-inline=\"true\" data-icon=\"plus\">\r\n   \t @localize(\"create_appointment\")\r\n   </button>\r\n</div>\r\n\r\n}@\r\n",contentFors:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"header",definition:"\r\n   <h1>\r\n      @localize(\"welcome_header\")\r\n   </h1>\r\n   \r\n",start:0,end:85,parentOffset:22,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"welcome_header\"",nameType:"StringLiteral",start:17,end:44,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "welcome"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"content",definition:"\r\n\r\n<div class=\"app_content\">\r\n   <h2>\r\n      @localize(\"welcome_text\")@(mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '')\r\n   </h2>\r\n   <button id=\"appointmentButton\" name=\"appointment_btn\" data-inline=\"true\" data-icon=\"plus\">\r\n   \t @localize(\"create_appointment\")\r\n   </button>\r\n</div>\r\n\r\n",start:89,end:427,parentOffset:112,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"welcome_text\"",nameType:"StringLiteral",start:46,end:71,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",start:71,end:144,type:64 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"create_appointment\"",nameType:"StringLiteral",start:256,end:287,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
this.allContentElements[1].scriptEval=function scriptEval(__$$DATA$$__){
var __$$DATA$$__RESULT__ = (function(){
return (mmir.User.getInstance() ? ', '+ mmir.User.getInstance().getName() : '');
})(); exportRenderDataTo(__$$DATA$$__); return __$$DATA$$__RESULT__;};
},initView: function(){ var viewName = "welcome"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } })],initPublish: function(){ require("mmirf/presentationManager").addView(this.getController(), this); },initController: function(){ var ctrlName = "Application"; this.controller = require("mmirf/controllerManager").get(ctrlName); },init: function(){ this.initController();  } }, true, 3);
})(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this);
