define(["module"],  function(module){
var ScxmlModel = function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $script_l36_c4(_event){

				console.log('render in onentry test main_state');
			
};
$script_l36_c4.tagname='script';
$script_l36_c4.line=36;
$script_l36_c4.column=4;
function $script_l45_c10(_event){

		        console.log('perform in transition click_on_language_btn');
	        
};
$script_l45_c10.tagname='script';
$script_l45_c10.line=45;
$script_l45_c10.column=10;
function $script_l51_c10(_event){

					console.log('perform/render in transition language_choosen');
			
};
$script_l51_c10.tagname='script';
$script_l51_c10.line=51;
$script_l51_c10.column=10;
function $script_l60_c4(_event){

				console.log('render in onentry registration_form');
			
};
$script_l60_c4.tagname='script';
$script_l60_c4.line=60;
$script_l60_c4.column=4;
function $script_l70_c4(_event){

				console.log('perform in onentry try_to_register_new_user');
			
};
$script_l70_c4.tagname='script';
$script_l70_c4.line=70;
$script_l70_c4.column=4;
function $script_l83_c4(_event){

				console.log('perform in onentry login_user');
			
};
$script_l83_c4.tagname='script';
$script_l83_c4.line=83;
$script_l83_c4.column=4;
function $script_l98_c4(_event){

				console.log('render in onentry logged_in');
			
};
$script_l98_c4.tagname='script';
$script_l98_c4.line=98;
$script_l98_c4.column=4;
function $script_l110_c5(_event){

					console.log('render in onentry create_appointment');
				
};
$script_l110_c5.tagname='script';
$script_l110_c5.line=110;
$script_l110_c5.column=5;
function $script_l127_c5(_event){

					console.log('perform in onentry save_appointment');
				
};
$script_l127_c5.tagname='script';
$script_l127_c5.line=127;
$script_l127_c5.column=5;
return {
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "profile": "ecmascript",
 "id": "scxmlRoot",
 "initial": "start",
 "$type": "scxml",
 "states": [
  {
   "id": "start",
   "name": "start",
   "$type": "state",
   "transitions": [
    {
     "event": "init",
     "name": "init",
     "target": "main_state",
     "$closeLine": 30,
     "$closeColumn": 60
    }
   ],
   "$closeLine": 31,
   "$closeColumn": 3
  },
  {
   "id": "main_state",
   "name": "main_state",
   "$type": "state",
   "onEntry": [
    $script_l36_c4
   ],
   "transitions": [
    {
     "event": "click_on_login_btn",
     "name": "click_on_login_btn",
     "target": "login_user",
     "$closeLine": 41,
     "$closeColumn": 88
    },
    {
     "event": "click_on_sign_up_btn",
     "name": "click_on_sign_up_btn",
     "target": "registration_form",
     "$closeLine": 42,
     "$closeColumn": 99
    },
    {
     "name": "click_on_language_btn",
     "event": "click_on_language_btn",
     "$closeLine": 48,
     "$closeColumn": 7,
     "onTransition": $script_l45_c10
    },
    {
     "name": "language_choosen",
     "event": "language_choosen",
     "$closeLine": 54,
     "$closeColumn": 7,
     "onTransition": $script_l51_c10
    }
   ],
   "$closeLine": 56,
   "$closeColumn": 3
  },
  {
   "id": "registration_form",
   "name": "registration_form",
   "$type": "state",
   "onEntry": [
    $script_l60_c4
   ],
   "transitions": [
    {
     "event": "click_on_register_btn",
     "name": "click_on_register_btn",
     "target": "try_to_register_new_user",
     "$closeLine": 64,
     "$closeColumn": 108
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 65,
     "$closeColumn": 60
    }
   ],
   "$closeLine": 66,
   "$closeColumn": 3
  },
  {
   "id": "try_to_register_new_user",
   "name": "try_to_register_new_user",
   "$type": "state",
   "onEntry": [
    $script_l70_c4
   ],
   "transitions": [
    {
     "event": "noUser",
     "target": "main_state",
     "$closeLine": 76,
     "$closeColumn": 51
    },
    {
     "event": "hasUser",
     "target": "logged_in",
     "$closeLine": 77,
     "$closeColumn": 51
    }
   ],
   "$closeLine": 78,
   "$closeColumn": 3
  },
  {
   "id": "login_user",
   "name": "login_user",
   "$type": "state",
   "actions": [
    {
     "$line": 81,
     "$column": 3,
     "$type": "assign",
     "expr": {
      "$line": 81,
      "$column": 16,
      "expr": "new Object",
      "$closeLine": 81,
      "$closeColumn": 27
     },
     "location": {
      "$line": 81,
      "$column": 38,
      "expr": "data",
      "$closeLine": 81,
      "$closeColumn": 43
     },
     "$closeLine": 81,
     "$closeColumn": 47,
     "content": {
      "$line": 81,
      "$column": 44,
      "content": " "
     }
    }
   ],
   "onEntry": [
    $script_l83_c4
   ],
   "transitions": [
    {
     "event": "login_failed",
     "target": "main_state",
     "$closeLine": 87,
     "$closeColumn": 56
    },
    {
     "event": "test_user_logged_in",
     "target": "logged_in",
     "$closeLine": 90,
     "$closeColumn": 62
    },
    {
     "event": "user_logged_in_and_noUser",
     "target": "main_state",
     "$closeLine": 92,
     "$closeColumn": 69
    },
    {
     "event": "user_logged_in_and_hasUser",
     "target": "logged_in",
     "$closeLine": 93,
     "$closeColumn": 69
    }
   ],
   "$closeLine": 94,
   "$closeColumn": 3
  },
  {
   "id": "logged_in",
   "name": "logged_in",
   "$type": "state",
   "onEntry": [
    $script_l98_c4
   ],
   "transitions": [
    {
     "event": "click_on_appointment_btn",
     "name": "click_on_appointment_btn",
     "target": "create_appointment",
     "$closeLine": 102,
     "$closeColumn": 108
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 103,
     "$closeColumn": 60
    }
   ],
   "$closeLine": 105,
   "$closeColumn": 3
  },
  {
   "id": "create_appointment",
   "name": "create_appointment",
   "$type": "state",
   "states": [
    {
     "$type": "initial",
     "id": "$generated-initial-0",
     "onEntry": [
      $script_l110_c5
     ],
     "$closeLine": 114,
     "$closeColumn": 4
    },
    {
     "id": "save_appointment",
     "name": "save_appointment",
     "$type": "state",
     "onEntry": [
      $script_l127_c5
     ],
     "transitions": [
      {
       "target": "logged_in",
       "$closeLine": 131,
       "$closeColumn": 35
      }
     ],
     "$closeLine": 132,
     "$closeColumn": 4
    }
   ],
   "transitions": [
    {
     "event": "click_on_save_appointment_btn",
     "name": "click_on_save_appointment_btn",
     "target": "save_appointment",
     "$closeLine": 117,
     "$closeColumn": 4
    },
    {
     "event": "click_on_discard_appointment_btn",
     "name": "click_on_discard_appointment_btn",
     "target": "logged_in",
     "$closeLine": 120,
     "$closeColumn": 4
    },
    {
     "event": "back",
     "name": "back",
     "target": "logged_in",
     "$closeLine": 123,
     "$closeColumn": 4
    }
   ],
   "$closeLine": 134,
   "$closeColumn": 3
  }
 ],
 "$closeLine": 136,
 "$closeColumn": 2,
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "interaction-manager(only-events)"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});