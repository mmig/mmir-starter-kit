
;(function(global){
var mmirName = typeof MMIR_CORE_NAME === "string"? MMIR_CORE_NAME : "mmir";
var mmir = global? global[mmirName] : void(0);
var require = mmir && mmir.require? mmir.require : (typeof requirejs !== "undefined"? requirejs : (global? global.require : require));
var require = mmir && mmir.require? mmir.require : require;
require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/view",name:"login",def:"@contentFor(\"header\"){\r\n    <h1>\r\n        @localize(\"mmig\")\r\n    </h1>\r\n}@\r\n\r\n@contentFor(\"content\"){\r\n\r\n<div class=\"app_content\">\r\n\r\n    <h2 style=\"margin-left: -0.3em;\">\r\n        @localize(\"login_header\")\r\n    </h2>\r\n\r\n    <div style=\"padding-left: 0.5em; padding-top: 1em;\">\r\n\t    <div id=\"emailField\" class=\"ui-field-contain\">\r\n\t        <label for=\"email\">\r\n\t\t\t\t@localize(\"user_name_place_holder\")\r\n\t\t\t</label>\r\n\t        <input type=\"text\" name=\"email\" id=\"email\"  placeholder=\"user name\" value=\"MMIG-User\" />\r\n\t    </div>\r\n\r\n\t    <div id=\"passwordField\" class=\"ui-field-contain\">\r\n\t    \t<label for=\"password\">\r\n\t\t\t\t@localize(\"password_place_holder\")\r\n\t\t\t</label>\r\n\t    \t<input type=\"password\" name=\"password\" id=\"password\"  placeholder=\"password\" value=\"mmig-user\" />\r\n\t    </div>\r\n\t</div>\r\n\r\n    <button id=\"loginButton\"  name=\"login_btn\" data-inline=\"true\" data-icon=\"arrow-r\">\r\n        @localize(\"login_label\")\r\n    </button>\r\n\r\n    <div style=\"padding-top: 1em;\"></div>\r\n    <hr/>\r\n\r\n    <div id=\"signUpLabel\" style=\"padding-top: 0.5em;\">\r\n        <h4>\r\n            @localize(\"registration_text\")\r\n        </h4>\r\n    </div>\r\n\r\n    <button id=\"signUpButton\" name=\"sign_up_btn\" data-inline=\"true\" data-icon=\"edit\">\r\n        @localize(\"registration_label\")\r\n    </button>\r\n\r\n    <br/>\r\n\r\n    @*\r\n     * Example with GUI elements for Speech Input\r\n     * Handlers for the GUI controls are added in the controller\r\n     * (see controllers/application.js).\r\n     *\r\n     * Activate this by removing the enclosing comment-statements @* ... *@\r\n    @*\r\n    <hr/>\r\n\r\n    <div class=\"ui-field-contain\">\r\n\t    <label for=\"asr-text\">Speech Input Test:</label>\r\n\t    <textarea id=\"asr-text\" name=\"asr-text\" rows=\"5\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"ui-field-contain\">\r\n\t    <label for=\"asr-status\">&nbsp;</label>\r\n\t    <div rows=\"5\">Partial Result: <span id=\"asr-status\"></span></div>\r\n    </div>\r\n\r\n    <fieldset data-role=\"controlgroup\" data-type=\"horizontal\">\r\n\r\n      <button id=\"asr\" name=\"asr\" data-icon=\"carat-r\" data-inline=\"true\">Start</button>\r\n\r\n      <button id=\"clear\" name=\"clear\" data-icon=\"delete\" data-inline=\"true\">Clear</button>\r\n\r\n      <button id=\"asr-mode\" type=\"checkbox\" data-inline=\"true\" data-icon=\"forbidden\">End-Of-Speech Detection (\"auto-stop\")</button>\r\n\r\n    </fieldset>\r\n\r\n    <br/>\r\n    *@\r\n\r\n</div>\r\n\r\n}@\r\n\r\n@contentFor(\"footer\"){\r\n    <div id=\"lang_button\" class=\"footer_button\" style=\"width: 56px; height: 100%; display: table; float: right;\">\r\n\t\t<div id='flags-@localize(\"current_language\")' style=\"display: table-cell; vertical-align: middle;width: 100%; height:100%;\" class=\"flags footer_button\">\r\n\t\t\t<div style=\"display: table; width: 100%; height:100%;\">\r\n\t    \t\t<div class=\"center_element lang_button_text footer_button_line_height\" style=\"display: table-cell; vertical-align:middle; text-align: center;\">\r\n\t\t\t\t\t@localize(\"current_language\")\r\n\t\t\t\t</div>\r\n\t    \t</div>\r\n\t\t</div>\r\n\t</div>\r\n}@\r\n\r\n@contentFor(\"dialogs\"){\r\n\r\n  <div id=\"modal\" style=\"\r\n\t    width: 100%;\r\n\t    height: 100%;\r\n\t    position: fixed;\r\n\t    top: 0px;\r\n\t    left: 0px;\r\n\t    display: none;\r\n\t    z-index: 999;\r\n\t    background-color: grey;\r\n\t    opacity: 0.5;\r\n\t\"></div>\r\n\r\n  <blockquote id=\"language-menu-panel\" class='ui-language-panel login_background_gradient ui-body-a ui-corner-all'>\r\n  \t@helper('get_language_menu') @*render('Application', 'languageMenu')*@\r\n  </blockquote>\r\n\r\n}@\r\n",contentFors:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"header",definition:"\r\n    <h1>\r\n        @localize(\"mmig\")\r\n    </h1>\r\n",start:0,end:74,parentOffset:22,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"mmig\"",nameType:"StringLiteral",start:20,end:37,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "login"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"content",definition:"\r\n\r\n<div class=\"app_content\">\r\n\r\n    <h2 style=\"margin-left: -0.3em;\">\r\n        @localize(\"login_header\")\r\n    </h2>\r\n\r\n    <div style=\"padding-left: 0.5em; padding-top: 1em;\">\r\n\t    <div id=\"emailField\" class=\"ui-field-contain\">\r\n\t        <label for=\"email\">\r\n\t\t\t\t@localize(\"user_name_place_holder\")\r\n\t\t\t</label>\r\n\t        <input type=\"text\" name=\"email\" id=\"email\"  placeholder=\"user name\" value=\"MMIG-User\" />\r\n\t    </div>\r\n\r\n\t    <div id=\"passwordField\" class=\"ui-field-contain\">\r\n\t    \t<label for=\"password\">\r\n\t\t\t\t@localize(\"password_place_holder\")\r\n\t\t\t</label>\r\n\t    \t<input type=\"password\" name=\"password\" id=\"password\"  placeholder=\"password\" value=\"mmig-user\" />\r\n\t    </div>\r\n\t</div>\r\n\r\n    <button id=\"loginButton\"  name=\"login_btn\" data-inline=\"true\" data-icon=\"arrow-r\">\r\n        @localize(\"login_label\")\r\n    </button>\r\n\r\n    <div style=\"padding-top: 1em;\"></div>\r\n    <hr/>\r\n\r\n    <div id=\"signUpLabel\" style=\"padding-top: 0.5em;\">\r\n        <h4>\r\n            @localize(\"registration_text\")\r\n        </h4>\r\n    </div>\r\n\r\n    <button id=\"signUpButton\" name=\"sign_up_btn\" data-inline=\"true\" data-icon=\"edit\">\r\n        @localize(\"registration_label\")\r\n    </button>\r\n\r\n    <br/>\r\n\r\n    @*\r\n     * Example with GUI elements for Speech Input\r\n     * Handlers for the GUI controls are added in the controller\r\n     * (see controllers/application.js).\r\n     *\r\n     * Activate this by removing the enclosing comment-statements @* ... *@\r\n    @*\r\n    <hr/>\r\n\r\n    <div class=\"ui-field-contain\">\r\n\t    <label for=\"asr-text\">Speech Input Test:</label>\r\n\t    <textarea id=\"asr-text\" name=\"asr-text\" rows=\"5\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"ui-field-contain\">\r\n\t    <label for=\"asr-status\">&nbsp;</label>\r\n\t    <div rows=\"5\">Partial Result: <span id=\"asr-status\"></span></div>\r\n    </div>\r\n\r\n    <fieldset data-role=\"controlgroup\" data-type=\"horizontal\">\r\n\r\n      <button id=\"asr\" name=\"asr\" data-icon=\"carat-r\" data-inline=\"true\">Start</button>\r\n\r\n      <button id=\"clear\" name=\"clear\" data-icon=\"delete\" data-inline=\"true\">Clear</button>\r\n\r\n      <button id=\"asr-mode\" type=\"checkbox\" data-inline=\"true\" data-icon=\"forbidden\">End-Of-Speech Detection (\"auto-stop\")</button>\r\n\r\n    </fieldset>\r\n\r\n    <br/>\r\n    *@\r\n\r\n</div>\r\n\r\n",start:78,end:2344,parentOffset:101,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"login_header\"",nameType:"StringLiteral",start:80,end:105,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"user_name_place_holder\"",nameType:"StringLiteral",start:265,end:300,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"password_place_holder\"",nameType:"StringLiteral",start:519,end:553,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"login_label\"",nameType:"StringLiteral",start:793,end:817,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"registration_text\"",nameType:"StringLiteral",start:974,end:1004,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"registration_label\"",nameType:"StringLiteral",start:1130,end:1161,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",start:1197,end:1443,type:262144 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",start:1449,end:2227,type:262144 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "login"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"footer",definition:"\r\n    <div id=\"lang_button\" class=\"footer_button\" style=\"width: 56px; height: 100%; display: table; float: right;\">\r\n\t\t<div id='flags-@localize(\"current_language\")' style=\"display: table-cell; vertical-align: middle;width: 100%; height:100%;\" class=\"flags footer_button\">\r\n\t\t\t<div style=\"display: table; width: 100%; height:100%;\">\r\n\t    \t\t<div class=\"center_element lang_button_text footer_button_line_height\" style=\"display: table-cell; vertical-align:middle; text-align: center;\">\r\n\t\t\t\t\t@localize(\"current_language\")\r\n\t\t\t\t</div>\r\n\t    \t</div>\r\n\t\t</div>\r\n\t</div>\r\n",start:2348,end:2938,parentOffset:2370,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"current_language\"",nameType:"StringLiteral",start:134,end:163,type:4 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",name:"\"current_language\"",nameType:"StringLiteral",start:490,end:519,type:4 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "login"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/contentElement",name:"dialogs",definition:"\r\n\r\n  <div id=\"modal\" style=\"\r\n\t    width: 100%;\r\n\t    height: 100%;\r\n\t    position: fixed;\r\n\t    top: 0px;\r\n\t    left: 0px;\r\n\t    display: none;\r\n\t    z-index: 999;\r\n\t    background-color: grey;\r\n\t    opacity: 0.5;\r\n\t\"></div>\r\n\r\n  <blockquote id=\"language-menu-panel\" class='ui-language-panel login_background_gradient ui-body-a ui-corner-all'>\r\n  \t@helper('get_language_menu') @*render('Application', 'languageMenu')*@\r\n  </blockquote>\r\n\r\n",start:2942,end:3408,parentOffset:2965,internalHasDynamicContent:true,allContentElements:[require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",helper:"'get_language_menu'",helperType:"StringLiteral",start:350,end:378,type:128 }),require("mmirf/storageUtils").restoreObject({ classConstructor: "mmirf/parsingResult",start:379,end:420,type:262144 })],initEvalFunctions: function initEvalFunctions(){this.setRenderData = function(__$$DATA$$__){};
var exportRenderDataTo = function(__$$DATA$$__){};
this.exportRenderDataTo = exportRenderDataTo;
},initView: function(){ var viewName = "login"; var ctrlName = "Application"; this.view = require("mmirf/presentationManager").getView(ctrlName, viewName); this.getView = function(){return this.view;}; return this.view; },getView: function(){ return this.initView();},initRenderer: function(){ this.renderer = require("mmirf/renderUtils"); },init: function(){ this.initRenderer();  this.initEvalFunctions();  } })],initPublish: function(){ require("mmirf/presentationManager").addView(this.getController(), this); },initController: function(){ var ctrlName = "Application"; this.controller = require("mmirf/controllerManager").get(ctrlName); },init: function(){ this.initController();  } }, true, 3);
})(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this);
