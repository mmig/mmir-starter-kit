define(["module"],  function(module){
var ScxmlModel = function rootConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'undefined';
function $deserializeDatamodel($serializedDatamodel){
  navigation_backwards_direction = $serializedDatamodel["navigation_backwards_direction"];
  navigation_transition = $serializedDatamodel["navigation_transition"];
}
function $serializeDatamodel(){
   return {
  "navigation_backwards_direction" : navigation_backwards_direction,
  "navigation_transition" : navigation_transition
   };
}
function $script_l41_c4(_event){

				mmir.dialog.render('Application', 'login', {transition: navigation_transition, reverse: navigation_backwards_direction});
			
};
$script_l41_c4.tagname='script';
$script_l41_c4.line=41;
$script_l41_c4.column=4;
function $expr_l44_c20(_event){
return false
};
$expr_l44_c20.tagname='undefined';
$expr_l44_c20.line=44;
$expr_l44_c20.column=20;
function $assign_l44_c7(_event){
navigation_backwards_direction = $expr_l44_c20.apply(this, arguments);
};
$assign_l44_c7.tagname='assign';
$assign_l44_c7.line=44;
$assign_l44_c7.column=7;
function $expr_l45_c20(_event){
return 'slide'
};
$expr_l45_c20.tagname='undefined';
$expr_l45_c20.line=45;
$expr_l45_c20.column=20;
function $assign_l45_c7(_event){
navigation_transition = $expr_l45_c20.apply(this, arguments);
};
$assign_l45_c7.tagname='assign';
$assign_l45_c7.line=45;
$assign_l45_c7.column=7;
function $script_l52_c10(_event){

		        mmir.dialog.perform('Application','slide_down_language_menu');
	        
};
$script_l52_c10.tagname='script';
$script_l52_c10.line=52;
$script_l52_c10.column=10;
function $expr_l58_c20(_event){
return 'slidedown'
};
$expr_l58_c20.tagname='undefined';
$expr_l58_c20.line=58;
$expr_l58_c20.column=20;
function $assign_l58_c7(_event){
navigation_transition = $expr_l58_c20.apply(this, arguments);
};
$assign_l58_c7.tagname='assign';
$assign_l58_c7.line=58;
$assign_l58_c7.column=7;
function $script_l59_c10(_event){

	            var isChanged = _event.data && _event.data.changed ? _event.data.changed : false;
	            if(isChanged){
					mmir.dialog.render('Application', 'login', {transition: navigation_transition, reverse: navigation_backwards_direction});
				}
				else {
					mmir.dialog.perform('Application','slide_up_language_menu');
				}
	        
};
$script_l59_c10.tagname='script';
$script_l59_c10.line=59;
$script_l59_c10.column=10;
function $expr_l68_c20(_event){
return 'slide'
};
$expr_l68_c20.tagname='undefined';
$expr_l68_c20.line=68;
$expr_l68_c20.column=20;
function $assign_l68_c7(_event){
navigation_transition = $expr_l68_c20.apply(this, arguments);
};
$assign_l68_c7.tagname='assign';
$assign_l68_c7.line=68;
$assign_l68_c7.column=7;
function $script_l75_c4(_event){

				mmir.dialog.render('Application', 'registration', {transition: navigation_transition, reverse: navigation_backwards_direction});
			
};
$script_l75_c4.tagname='script';
$script_l75_c4.line=75;
$script_l75_c4.column=4;
function $expr_l78_c20(_event){
return false
};
$expr_l78_c20.tagname='undefined';
$expr_l78_c20.line=78;
$expr_l78_c20.column=20;
function $assign_l78_c7(_event){
navigation_backwards_direction = $expr_l78_c20.apply(this, arguments);
};
$assign_l78_c7.tagname='assign';
$assign_l78_c7.line=78;
$assign_l78_c7.column=7;
function $expr_l82_c20(_event){
return true
};
$expr_l82_c20.tagname='undefined';
$expr_l82_c20.line=82;
$expr_l82_c20.column=20;
function $assign_l82_c7(_event){
navigation_backwards_direction = $expr_l82_c20.apply(this, arguments);
};
$assign_l82_c7.tagname='assign';
$assign_l82_c7.line=82;
$assign_l82_c7.column=7;
function $script_l88_c4(_event){

				mmir.dialog.perform('Application', 'register');
			
};
$script_l88_c4.tagname='script';
$script_l88_c4.line=88;
$script_l88_c4.column=4;
function $cond_l92_c20(_event){
return mmir.User.getInstance() == null
};
$cond_l92_c20.tagname='undefined';
$cond_l92_c20.line=92;
$cond_l92_c20.column=20;
function $cond_l93_c20(_event){
return mmir.User.getInstance() != null
};
$cond_l93_c20.tagname='undefined';
$cond_l93_c20.line=93;
$cond_l93_c20.column=20;
function $script_l98_c4(_event){

				mmir.dialog.perform('Application','login', {transition: navigation_transition, reverse: navigation_backwards_direction});
			
};
$script_l98_c4.tagname='script';
$script_l98_c4.line=98;
$script_l98_c4.column=4;
function $expr_l101_c20(_event){
return false
};
$expr_l101_c20.tagname='undefined';
$expr_l101_c20.line=101;
$expr_l101_c20.column=20;
function $assign_l101_c7(_event){
navigation_backwards_direction = $expr_l101_c20.apply(this, arguments);
};
$assign_l101_c7.tagname='assign';
$assign_l101_c7.line=101;
$assign_l101_c7.column=7;
function $cond_l104_c43(_event){
return mmir.User.getInstance() != null
};
$cond_l104_c43.tagname='undefined';
$cond_l104_c43.line=104;
$cond_l104_c43.column=43;
function $cond_l105_c43(_event){
return mmir.User.getInstance() == null
};
$cond_l105_c43.tagname='undefined';
$cond_l105_c43.line=105;
$cond_l105_c43.column=43;
function $script_l110_c4(_event){

				mmir.dialog.render('Application', 'welcome', {transition: navigation_transition, reverse: navigation_backwards_direction});
			
};
$script_l110_c4.tagname='script';
$script_l110_c4.line=110;
$script_l110_c4.column=4;
function $expr_l113_c20(_event){
return false
};
$expr_l113_c20.tagname='undefined';
$expr_l113_c20.line=113;
$expr_l113_c20.column=20;
function $assign_l113_c7(_event){
navigation_backwards_direction = $expr_l113_c20.apply(this, arguments);
};
$assign_l113_c7.tagname='assign';
$assign_l113_c7.line=113;
$assign_l113_c7.column=7;
function $expr_l117_c20(_event){
return true
};
$expr_l117_c20.tagname='undefined';
$expr_l117_c20.line=117;
$expr_l117_c20.column=20;
function $assign_l117_c7(_event){
navigation_backwards_direction = $expr_l117_c20.apply(this, arguments);
};
$assign_l117_c7.tagname='assign';
$assign_l117_c7.line=117;
$assign_l117_c7.column=7;
function $expr_l133_c20(_event){
return true
};
$expr_l133_c20.tagname='undefined';
$expr_l133_c20.line=133;
$expr_l133_c20.column=20;
function $assign_l133_c7(_event){
navigation_backwards_direction = $expr_l133_c20.apply(this, arguments);
};
$assign_l133_c7.tagname='assign';
$assign_l133_c7.line=133;
$assign_l133_c7.column=7;
function $expr_l137_c20(_event){
return true
};
$expr_l137_c20.tagname='undefined';
$expr_l137_c20.line=137;
$expr_l137_c20.column=20;
function $assign_l137_c7(_event){
navigation_backwards_direction = $expr_l137_c20.apply(this, arguments);
};
$assign_l137_c7.tagname='assign';
$assign_l137_c7.line=137;
$assign_l137_c7.column=7;
function $expr_l141_c20(_event){
return true
};
$expr_l141_c20.tagname='undefined';
$expr_l141_c20.line=141;
$expr_l141_c20.column=20;
function $assign_l141_c7(_event){
navigation_backwards_direction = $expr_l141_c20.apply(this, arguments);
};
$assign_l141_c7.tagname='assign';
$assign_l141_c7.line=141;
$assign_l141_c7.column=7;
function $script_l125_c5(_event){

					mmir.dialog.render('Calendar', 'create_appointment', {transition: navigation_transition, reverse: navigation_backwards_direction});
				
};
$script_l125_c5.tagname='script';
$script_l125_c5.line=125;
$script_l125_c5.column=5;
function $expr_l128_c21(_event){
return false
};
$expr_l128_c21.tagname='undefined';
$expr_l128_c21.line=128;
$expr_l128_c21.column=21;
function $assign_l128_c8(_event){
navigation_backwards_direction = $expr_l128_c21.apply(this, arguments);
};
$assign_l128_c8.tagname='assign';
$assign_l128_c8.line=128;
$assign_l128_c8.column=8;
function $script_l146_c5(_event){

					var data = {container_id:"create_appointment"};
					var result = mmir.dialog.perform('Calendar','create_appointment',data);
				
};
$script_l146_c5.tagname='script';
$script_l146_c5.line=146;
$script_l146_c5.column=5;
function $data_l30_c17(_event){
return false
};
$data_l30_c17.tagname='undefined';
$data_l30_c17.line=30;
$data_l30_c17.column=17;
function $data_l31_c17(_event){
return 'pop'
};
$data_l31_c17.tagname='undefined';
$data_l31_c17.line=31;
$data_l31_c17.column=17;
function $datamodel_l29_c2(_event){
if(typeof navigation_backwards_direction === "undefined")  navigation_backwards_direction = $data_l30_c17.apply(this, arguments);
if(typeof navigation_transition === "undefined")  navigation_transition = $data_l31_c17.apply(this, arguments);
};
$datamodel_l29_c2.tagname='datamodel';
$datamodel_l29_c2.line=29;
$datamodel_l29_c2.column=2;
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
     "$closeLine": 35,
     "$closeColumn": 60
    }
   ],
   "$closeLine": 36,
   "$closeColumn": 3
  },
  {
   "id": "main_state",
   "name": "main_state",
   "$type": "state",
   "onEntry": [
    $script_l41_c4,
    $assign_l44_c7,
    $assign_l45_c7
   ],
   "transitions": [
    {
     "event": "click_on_login_btn",
     "name": "click_on_login_btn",
     "target": "login_user",
     "$closeLine": 48,
     "$closeColumn": 88
    },
    {
     "event": "click_on_sign_up_btn",
     "name": "click_on_sign_up_btn",
     "target": "registration_form",
     "$closeLine": 49,
     "$closeColumn": 99
    },
    {
     "name": "click_on_language_btn",
     "event": "click_on_language_btn",
     "$closeLine": 55,
     "$closeColumn": 7,
     "onTransition": $script_l52_c10
    },
    {
     "name": "language_choosen",
     "event": "language_choosen",
     "$closeLine": 69,
     "$closeColumn": 7,
     "onTransition": [
      $assign_l58_c7,
      $script_l59_c10,
      $assign_l68_c7
     ]
    }
   ],
   "$closeLine": 71,
   "$closeColumn": 3
  },
  {
   "id": "registration_form",
   "name": "registration_form",
   "$type": "state",
   "onEntry": [
    $script_l75_c4,
    $assign_l78_c7
   ],
   "transitions": [
    {
     "event": "click_on_register_btn",
     "name": "click_on_register_btn",
     "target": "try_to_register_new_user",
     "$closeLine": 80,
     "$closeColumn": 108
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 83,
     "$closeColumn": 4,
     "onTransition": $assign_l82_c7
    }
   ],
   "$closeLine": 84,
   "$closeColumn": 3
  },
  {
   "id": "try_to_register_new_user",
   "name": "try_to_register_new_user",
   "$type": "state",
   "onEntry": [
    $script_l88_c4
   ],
   "transitions": [
    {
     "cond": $cond_l92_c20,
     "target": "main_state",
     "$closeLine": 92,
     "$closeColumn": 75
    },
    {
     "cond": $cond_l93_c20,
     "target": "logged_in",
     "$closeLine": 93,
     "$closeColumn": 74
    }
   ],
   "$closeLine": 94,
   "$closeColumn": 3
  },
  {
   "id": "login_user",
   "name": "login_user",
   "$type": "state",
   "onEntry": [
    $script_l98_c4,
    $assign_l101_c7
   ],
   "transitions": [
    {
     "event": "login_failed",
     "target": "main_state",
     "$closeLine": 103,
     "$closeColumn": 56
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l104_c43,
     "target": "logged_in",
     "$closeLine": 104,
     "$closeColumn": 96
    },
    {
     "event": "user_logged_in",
     "cond": $cond_l105_c43,
     "target": "main_state",
     "$closeLine": 105,
     "$closeColumn": 97
    }
   ],
   "$closeLine": 106,
   "$closeColumn": 3
  },
  {
   "id": "logged_in",
   "name": "logged_in",
   "$type": "state",
   "onEntry": [
    $script_l110_c4,
    $assign_l113_c7
   ],
   "transitions": [
    {
     "event": "click_on_appointment_btn",
     "name": "click_on_appointment_btn",
     "target": "create_appointment",
     "$closeLine": 115,
     "$closeColumn": 108
    },
    {
     "event": "back",
     "name": "back",
     "target": "main_state",
     "$closeLine": 118,
     "$closeColumn": 4,
     "onTransition": $assign_l117_c7
    }
   ],
   "$closeLine": 120,
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
      $script_l125_c5,
      $assign_l128_c8
     ],
     "$closeLine": 130,
     "$closeColumn": 4
    },
    {
     "id": "save_appointment",
     "name": "save_appointment",
     "$type": "state",
     "onEntry": [
      $script_l146_c5
     ],
     "transitions": [
      {
       "target": "logged_in",
       "$closeLine": 151,
       "$closeColumn": 35
      }
     ],
     "$closeLine": 152,
     "$closeColumn": 4
    }
   ],
   "transitions": [
    {
     "event": "click_on_save_appointment_btn",
     "name": "click_on_save_appointment_btn",
     "target": "save_appointment",
     "$closeLine": 134,
     "$closeColumn": 4,
     "onTransition": $assign_l133_c7
    },
    {
     "event": "click_on_discard_appointment_btn",
     "name": "click_on_discard_appointment_btn",
     "target": "logged_in",
     "$closeLine": 138,
     "$closeColumn": 4,
     "onTransition": $assign_l137_c7
    },
    {
     "event": "back",
     "name": "back",
     "target": "logged_in",
     "$closeLine": 142,
     "$closeColumn": 4,
     "onTransition": $assign_l141_c7
    }
   ],
   "$closeLine": 154,
   "$closeColumn": 3
  }
 ],
 "$closeLine": 156,
 "$closeColumn": 2,
 "onEntry": [
  $datamodel_l29_c2
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "example-view_transitions-dialogDescriptionSCXML"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});