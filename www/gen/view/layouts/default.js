
;(function(global){
var mmirName = typeof MMIR_CORE_NAME === "string"? MMIR_CORE_NAME : "mmir";
var mmir = global? global[mmirName] : void(0);
var require = mmir && mmir.require? mmir.require : (typeof requirejs !== "undefined"? requirejs : (global? global.require : require));
var require = mmir && mmir.require? mmir.require : require;
require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/layout",name:"Default",remoteaccess:false,def:"<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n\r\n      \r\n      @style(\"content/css/jqm-datebox-1.4.0.min\")\r\n      @style(\"content/css/jqm-extentions\" )\r\n      @style(\"content/css/application\")\r\n      @style(\"content/css/flags\")\r\n\r\n      @script(\"libs/jqm-datebox-1.4.2.comp.flipbox.min\")\r\n      @script(\"libs/jquery.mobile.datebox.i18n.de.utf8\")\r\n      @script(\"libs/jquery.mobile.datebox.i18n.ja.utf8\")\r\n      @script(\"libs/jquery.mobile.datebox.i18n.en.utf8\")\r\n\r\n      \r\n\r\n    </head>\r\n    <body>\r\n\r\n        <div id=\"pageContainer\" data-role=\"page\" class=\"type-interior\" data-url=\"pageContainer\" data-cache=\"false\" >\r\n\r\n            <div id=\"pageHeader\" data-role=\"header\" data-position=\"fixed\" data-theme=\"b\" data-tap-toggle=\"false\" style=\"vertical-align: middle;\">\r\n              @yield(\"header\")\r\n            </div>\r\n\r\n            <div id=\"pageContent\" role=\"main\" class=\"ui-content\" style=\"padding-bottom:1px;\">\r\n              @yield(\"content\")\r\n            </div>\r\n\r\n            <div id=\"pageFooter\" data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n              <div id=\"mic_button\" class=\"round footer_button mic_button\">\r\n\t\t\t    <img src=\"content/images/mic.png\" width=\"50\" height=\"50\" style=\"left:3px; position:relative; top:2px;\"></img>\r\n\t\t\t  </div>\r\n\t\t      @yield('footer')\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </body>\r\n\r\n    <dialogs>\r\n      @yield('dialogs')\r\n    </dialogs>\r\n</html>\r\n",headerElements:[{"tagName":"SCRIPT","textContent":"","type":"text/javascript","charset":"utf-8","src":"libs/jqm-datebox-1.4.2.comp.flipbox.min.js"},{"tagName":"SCRIPT","textContent":"","type":"text/javascript","charset":"utf-8","src":"libs/jquery.mobile.datebox.i18n.de.utf8.js"},{"tagName":"SCRIPT","textContent":"","type":"text/javascript","charset":"utf-8","src":"libs/jquery.mobile.datebox.i18n.ja.utf8.js"},{"tagName":"SCRIPT","textContent":"","type":"text/javascript","charset":"utf-8","src":"libs/jquery.mobile.datebox.i18n.en.utf8.js"},{"tagName":"LINK","textContent":"","rel":"stylesheet","type":"text/css","href":"content/css/jqm-datebox-1.4.0.min.css"},{"tagName":"LINK","textContent":"","rel":"stylesheet","type":"text/css","href":"content/css/jqm-extentions.css"},{"tagName":"LINK","textContent":"","rel":"stylesheet","type":"text/css","href":"content/css/application.css"},{"tagName":"LINK","textContent":"","rel":"stylesheet","type":"text/css","href":"content/css/flags.css"}],headerContents:"<script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/jqm-datebox-1.4.2.comp.flipbox.min.js\"></script><script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/jquery.mobile.datebox.i18n.de.utf8.js\"></script><script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/jquery.mobile.datebox.i18n.ja.utf8.js\"></script><script type=\"text/javascript\" charset=\"utf-8\" src=\"libs/jquery.mobile.datebox.i18n.en.utf8.js\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"content/css/jqm-datebox-1.4.0.min.css\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"content/css/jqm-extentions.css\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"content/css/application.css\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"content/css/flags.css\" />",title:"",dialogsContents:"\r\n      @yield('dialogs')\r\n    ",markerAttributeName:"loc",markerAttributeValue:"remote",markerUseSingleQuotes:false,initPublish: function(){ this._extHeaderElements(); this.bodyContents=this.bodyContentElement.definition; require("mmirf/presentationManager").addLayout(this); },bodyContentElement:require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"Default",definition:"\r\n\r\n        <div id=\"pageContainer\" data-role=\"page\" class=\"type-interior\" data-url=\"pageContainer\" data-cache=\"false\" >\r\n\r\n            <div id=\"pageHeader\" data-role=\"header\" data-position=\"fixed\" data-theme=\"b\" data-tap-toggle=\"false\" style=\"vertical-align: middle;\">\r\n              @yield(\"header\")\r\n            </div>\r\n\r\n            <div id=\"pageContent\" role=\"main\" class=\"ui-content\" style=\"padding-bottom:1px;\">\r\n              @yield(\"content\")\r\n            </div>\r\n\r\n            <div id=\"pageFooter\" data-role=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\">\r\n              <div id=\"mic_button\" class=\"round footer_button mic_button\">\r\n\t\t\t    <img src=\"content/images/mic.png\" width=\"50\" height=\"50\" style=\"left:3px; position:relative; top:2px;\"></img>\r\n\t\t\t  </div>\r\n\t\t      @yield('footer')\r\n            </div>\r\n\r\n        </div>\r\n\r\n    ",parentOffset:0,internalHasDynamicContent:false,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"header\"",nameType:"StringLiteral",start:285,end:301,type:8 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"content\"",nameType:"StringLiteral",start:434,end:451,type:8 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"'footer'",nameType:"StringLiteral",start:790,end:806,type:8 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "Default"; var ctrlName = null; this.view = require("mmirf/presentationManager").getLayout(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } }),yields:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/yield",name:"'dialogs'",nameType:"StringLiteral",start:8,end:25,contentAreaType:4 })] }, true, 3);
})(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this);
