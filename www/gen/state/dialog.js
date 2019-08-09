define(["module"],  function(module){
var ScxmlModel = function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){

}
function $serializeDatamodel(){
   return {

   };
}
function $script_l10_c7(_event){

        mmir.dialog.render('Application', 'login');
      
};
$script_l10_c7.tagname='script';
$script_l10_c7.line=10;
$script_l10_c7.column=7;
function $script_l19_c7(_event){

        mmir.dialog.perform('Application','slide_down_language_menu');
      
};
$script_l19_c7.tagname='script';
$script_l19_c7.line=19;
$script_l19_c7.column=7;
function $script_l25_c7(_event){

        var isChanged = _event.data && _event.data.changed ? _event.data.changed : false;
        if(isChanged){
          mmir.dialog.render('Application', 'login');
        }
        else {
          mmir.dialog.perform('Application','slide_up_language_menu');
        }
      
};
$script_l25_c7.tagname='script';
$script_l25_c7.line=25;
$script_l25_c7.column=7;
function $script_l40_c7(_event){

        mmir.dialog.render('Application', 'registration');
      
};
$script_l40_c7.tagname='script';
$script_l40_c7.line=40;
$script_l40_c7.column=7;
function $script_l50_c7(_event){

        mmir.dialog.perform('Application', 'register');
      
};
$script_l50_c7.tagname='script';
$script_l50_c7.line=50;
$script_l50_c7.column=7;
function $cond_l54_c22(_event){
return mmir.User.getInstance() == null
};
$cond_l54_c22.tagname='undefined';
$cond_l54_c22.line=54;
$cond_l54_c22.column=22;
function $cond_l55_c22(_event){
return mmir.User.getInstance() != null
};
$cond_l55_c22.tagname='undefined';
$cond_l55_c22.line=55;
$cond_l55_c22.column=22;
function $script_l60_c7(_event){

        mmir.dialog.perform('Application','login');
      
};
$script_l60_c7.tagname='script';
$script_l60_c7.line=60;
$script_l60_c7.column=7;
function $cond_l65_c45(_event){
return mmir.User.getInstance() != null
};
$cond_l65_c45.tagname='undefined';
$cond_l65_c45.line=65;
$cond_l65_c45.column=45;
function $cond_l66_c45(_event){
return mmir.User.getInstance() == null
};
$cond_l66_c45.tagname='undefined';
$cond_l66_c45.line=66;
$cond_l66_c45.column=45;
function $script_l71_c7(_event){

        mmir.dialog.render('Application', 'welcome');
      
};
$script_l71_c7.tagname='script';
$script_l71_c7.line=71;
$script_l71_c7.column=7;
function $script_l83_c9(_event){

          mmir.dialog.render('Calendar', 'create_appointment');
        
};
$script_l83_c9.tagname='script';
$script_l83_c9.line=83;
$script_l83_c9.column=9;
function $script_l103_c9(_event){

          var data = {container_id: "create_appointment"};
          var result = mmir.dialog.perform('Calendar','create_appointment',data);
        
};
$script_l103_c9.tagname='script';
$script_l103_c9.line=103;
$script_l103_c9.column=9;
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
     "$closeLine": 4,
     "$closeColumn": 62
    }
   ],
   "$closeLine": 5,
   "$closeColumn": 4
  },
  {
   "id": "main_state",
   "name": "main_state",
   "$type": "state",
   "onEntry": [
    $script_l10_c7
   ],
   "transitions": [
    {
     "event": "click_on_login_btn",
     "name": "click_on_login_btn",
     "target": "login_user",
     "$closeLine": 15,
     "$closeColumn": 90
    },
    {
     "event": "click_on_sign_up_btn",
     "name": "click_on_sign_up_btn",
     "target": "registration_form",
     "$closeLine": 16,
     "$closeColumn": 101
    },
    {
     "name": "click_on_language_btn",
     "event": "click_on_language_btn",
     "$closeLine": 22,
     "$closeColumn": 6,
     "onTransition": $script_l19_c7
    },
    {
     "name": "language_choosen",
     "event": "language_choosen",
     "$closeLine": 34,
     "$closeColumn": 6,
     "onTransition": $script_l25_c7
    }
   ],
   "$closeLine": 36,
   "$closeColumn": 4
  },
  {
   "id": "registration_form",
   "name": "registration_form",
   "$type": "state",
   "onEntry": [
    $script_l40_c7
   ],
   "transitions": [
    {
     "event": "click_on_register_btn",
     "name": "click_on_register_btn",
     "target": "try_to_register_new_user",
     "$closeLine": 44,
     "$closeColumn": 110
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 45,
     "$closeColumn": 62
    }
   ],
   "$closeLine": 46,
   "$closeColumn": 4
  },
  {
   "id": "try_to_register_new_user",
   "name": "try_to_register_new_user",
   "$type": "state",
   "onEntry": [
    $script_l50_c7
   ],
   "transitions": [
    {
     "cond": $cond_l54_c22,
     "target": "main_state",
     "$closeLine": 54,
     "$closeColumn": 77
    },
    {
     "cond": $cond_l55_c22,
     "target": "logged_in",
     "$closeLine": 55,
     "$closeColumn": 76
    }
   ],
   "$closeLine": 56,
   "$closeColumn": 4
  },
  {
   "id": "login_user",
   "name": "login_user",
   "$type": "state",
   "onEntry": [
    $script_l60_c7
   ],
   "transitions": [
    {
     "event": "login_failed",
     "target": "main_state",
     "$closeLine": 64,
     "$closeColumn": 58
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l65_c45,
     "target": "logged_in",
     "$closeLine": 65,
     "$closeColumn": 98
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l66_c45,
     "target": "main_state",
     "$closeLine": 66,
     "$closeColumn": 99
    }
   ],
   "$closeLine": 67,
   "$closeColumn": 4
  },
  {
   "id": "logged_in",
   "name": "logged_in",
   "$type": "state",
   "onEntry": [
    $script_l71_c7
   ],
   "transitions": [
    {
     "event": "click_on_appointment_btn",
     "name": "click_on_appointment_btn",
     "target": "create_appointment",
     "$closeLine": 75,
     "$closeColumn": 110
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 76,
     "$closeColumn": 62
    }
   ],
   "$closeLine": 78,
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
     "transitions": [
      {
       "target": "create_appointment_initial",
       "$closeLine": 86,
       "$closeColumn": 8,
       "onTransition": $script_l83_c9
      }
     ],
     "$closeLine": 87,
     "$closeColumn": 6
    },
    {
     "id": "create_appointment_initial",
     "name": "create_appointment_initial",
     "$type": "state",
     "$closeLine": 90,
     "$closeColumn": 6
    },
    {
     "id": "save_appointment",
     "name": "save_appointment",
     "$type": "state",
     "onEntry": [
      $script_l103_c9
     ],
     "transitions": [
      {
       "target": "logged_in",
       "$closeLine": 108,
       "$closeColumn": 38
      }
     ],
     "$closeLine": 109,
     "$closeColumn": 6
    }
   ],
   "transitions": [
    {
     "event": "click_on_save_appointment_btn",
     "name": "click_on_save_appointment_btn",
     "target": "save_appointment",
     "$closeLine": 93,
     "$closeColumn": 6
    },
    {
     "event": "click_on_discard_appointment_btn",
     "name": "click_on_discard_appointment_btn",
     "target": "logged_in",
     "$closeLine": 96,
     "$closeColumn": 6
    },
    {
     "event": "back",
     "name": "back",
     "target": "logged_in",
     "$closeLine": 99,
     "$closeColumn": 6
    }
   ],
   "$closeLine": 111,
   "$closeColumn": 4
  }
 ],
 "$closeLine": 113,
 "$closeColumn": 2,
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "dialog"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});