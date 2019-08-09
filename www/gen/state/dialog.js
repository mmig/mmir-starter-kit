define(["module"],  function(module){
var ScxmlModel = function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $script_l36_c7(_event){

			mmir.dialog.render('Application', 'login');
      
};
$script_l36_c7.tagname='script';
$script_l36_c7.line=36;
$script_l36_c7.column=7;
function $script_l45_c7(_event){

			mmir.dialog.perform('Application','slide_down_language_menu');
      
};
$script_l45_c7.tagname='script';
$script_l45_c7.line=45;
$script_l45_c7.column=7;
function $script_l51_c7(_event){

		var isChanged = _event.data && _event.data.changed ? _event.data.changed : false;
		if(isChanged){
			mmir.dialog.render('Application', 'login');
		}
		else {
			mmir.dialog.perform('Application','slide_up_language_menu');
		}
      
};
$script_l51_c7.tagname='script';
$script_l51_c7.line=51;
$script_l51_c7.column=7;
function $script_l66_c7(_event){

			mmir.dialog.render('Application', 'registration');
      
};
$script_l66_c7.tagname='script';
$script_l66_c7.line=66;
$script_l66_c7.column=7;
function $script_l76_c7(_event){

			mmir.dialog.perform('Application', 'register');
      
};
$script_l76_c7.tagname='script';
$script_l76_c7.line=76;
$script_l76_c7.column=7;
function $cond_l80_c22(_event){
return mmir.User.getInstance() == null
};
$cond_l80_c22.tagname='undefined';
$cond_l80_c22.line=80;
$cond_l80_c22.column=22;
function $cond_l81_c22(_event){
return mmir.User.getInstance() != null
};
$cond_l81_c22.tagname='undefined';
$cond_l81_c22.line=81;
$cond_l81_c22.column=22;
function $script_l86_c7(_event){

			mmir.dialog.perform('Application','login');
      
};
$script_l86_c7.tagname='script';
$script_l86_c7.line=86;
$script_l86_c7.column=7;
function $cond_l91_c45(_event){
return mmir.User.getInstance() != null
};
$cond_l91_c45.tagname='undefined';
$cond_l91_c45.line=91;
$cond_l91_c45.column=45;
function $cond_l92_c45(_event){
return mmir.User.getInstance() == null
};
$cond_l92_c45.tagname='undefined';
$cond_l92_c45.line=92;
$cond_l92_c45.column=45;
function $script_l97_c7(_event){

			mmir.dialog.render('Application', 'welcome');
      
};
$script_l97_c7.tagname='script';
$script_l97_c7.line=97;
$script_l97_c7.column=7;
function $script_l109_c3(_event){

			mmir.dialog.render('Calendar', 'create_appointment');
		
};
$script_l109_c3.tagname='script';
$script_l109_c3.line=109;
$script_l109_c3.column=3;
function $script_l126_c3(_event){

	  		var data = {container_id: "create_appointment"};
	  		var result = mmir.dialog.perform('Calendar','create_appointment',data);
		
};
$script_l126_c3.tagname='script';
$script_l126_c3.line=126;
$script_l126_c3.column=3;
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
     "$closeColumn": 62
    }
   ],
   "$closeLine": 31,
   "$closeColumn": 4
  },
  {
   "id": "main_state",
   "name": "main_state",
   "$type": "state",
   "onEntry": [
    $script_l36_c7
   ],
   "transitions": [
    {
     "event": "click_on_login_btn",
     "name": "click_on_login_btn",
     "target": "login_user",
     "$closeLine": 41,
     "$closeColumn": 90
    },
    {
     "event": "click_on_sign_up_btn",
     "name": "click_on_sign_up_btn",
     "target": "registration_form",
     "$closeLine": 42,
     "$closeColumn": 101
    },
    {
     "name": "click_on_language_btn",
     "event": "click_on_language_btn",
     "$closeLine": 48,
     "$closeColumn": 6,
     "onTransition": $script_l45_c7
    },
    {
     "name": "language_choosen",
     "event": "language_choosen",
     "$closeLine": 60,
     "$closeColumn": 6,
     "onTransition": $script_l51_c7
    }
   ],
   "$closeLine": 62,
   "$closeColumn": 4
  },
  {
   "id": "registration_form",
   "name": "registration_form",
   "$type": "state",
   "onEntry": [
    $script_l66_c7
   ],
   "transitions": [
    {
     "event": "click_on_register_btn",
     "name": "click_on_register_btn",
     "target": "try_to_register_new_user",
     "$closeLine": 70,
     "$closeColumn": 110
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 71,
     "$closeColumn": 62
    }
   ],
   "$closeLine": 72,
   "$closeColumn": 4
  },
  {
   "id": "try_to_register_new_user",
   "name": "try_to_register_new_user",
   "$type": "state",
   "onEntry": [
    $script_l76_c7
   ],
   "transitions": [
    {
     "cond": $cond_l80_c22,
     "target": "main_state",
     "$closeLine": 80,
     "$closeColumn": 77
    },
    {
     "cond": $cond_l81_c22,
     "target": "logged_in",
     "$closeLine": 81,
     "$closeColumn": 76
    }
   ],
   "$closeLine": 82,
   "$closeColumn": 4
  },
  {
   "id": "login_user",
   "name": "login_user",
   "$type": "state",
   "onEntry": [
    $script_l86_c7
   ],
   "transitions": [
    {
     "event": "login_failed",
     "target": "main_state",
     "$closeLine": 90,
     "$closeColumn": 58
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l91_c45,
     "target": "logged_in",
     "$closeLine": 91,
     "$closeColumn": 98
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l92_c45,
     "target": "main_state",
     "$closeLine": 92,
     "$closeColumn": 99
    }
   ],
   "$closeLine": 93,
   "$closeColumn": 4
  },
  {
   "id": "logged_in",
   "name": "logged_in",
   "$type": "state",
   "onEntry": [
    $script_l97_c7
   ],
   "transitions": [
    {
     "event": "click_on_appointment_btn",
     "name": "click_on_appointment_btn",
     "target": "create_appointment",
     "$closeLine": 101,
     "$closeColumn": 110
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 102,
     "$closeColumn": 62
    }
   ],
   "$closeLine": 104,
   "$closeColumn": 4
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
      $script_l109_c3
     ],
     "$closeLine": 113,
     "$closeColumn": 6
    },
    {
     "id": "save_appointment",
     "name": "save_appointment",
     "$type": "state",
     "onEntry": [
      $script_l126_c3
     ],
     "transitions": [
      {
       "target": "logged_in",
       "$closeLine": 131,
       "$closeColumn": 38
      }
     ],
     "$closeLine": 132,
     "$closeColumn": 6
    }
   ],
   "transitions": [
    {
     "event": "click_on_save_appointment_btn",
     "name": "click_on_save_appointment_btn",
     "target": "save_appointment",
     "$closeLine": 116,
     "$closeColumn": 6
    },
    {
     "event": "click_on_discard_appointment_btn",
     "name": "click_on_discard_appointment_btn",
     "target": "logged_in",
     "$closeLine": 119,
     "$closeColumn": 6
    },
    {
     "event": "back",
     "name": "back",
     "target": "logged_in",
     "$closeLine": 122,
     "$closeColumn": 6
    }
   ],
   "$closeLine": 134,
   "$closeColumn": 4
  }
 ],
 "$closeLine": 136,
 "$closeColumn": 2,
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "dialog"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});