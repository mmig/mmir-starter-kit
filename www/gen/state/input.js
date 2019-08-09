define(["module"],  function(module){
var ScxmlModel = function inputConstructor(_x,_sessionid,_ioprocessors,In){
   var _name = 'input';
function $deserializeDatamodel($serializedDatamodel){
  data = $serializedDatamodel["data"];
  command_name = $serializedDatamodel["command_name"];
  command = $serializedDatamodel["command"];
  emma = $serializedDatamodel["emma"];
}
function $serializeDatamodel(){
   return {
  "data" : data,
  "command_name" : command_name,
  "command" : command,
  "emma" : emma
   };
}
function $script_l43_c5(_event){

       			var actionName;
           	 	for (name in _event.data) {
           	 		if(name == 'phrase'){
           	 			continue;
           	 		}
           	 		if(_event.data.hasOwnProperty(name)){
	       				actionName = name;
	       				break;
       				}
       			}

       			console.log('InputManager: setting command_name to "'+actionName+'" for event-data '+JSON.stringify(_event.data));
        	
};
$script_l43_c5.tagname='script';
$script_l43_c5.line=43;
$script_l43_c5.column=5;
function $expr_l57_c18(_event){
return actionName
};
$expr_l57_c18.tagname='undefined';
$expr_l57_c18.line=57;
$expr_l57_c18.column=18;
function $assign_l57_c5(_event){
command_name = $expr_l57_c18.apply(this, arguments);
};
$assign_l57_c5.tagname='assign';
$assign_l57_c5.line=57;
$assign_l57_c5.column=5;
function $expr_l58_c18(_event){
return _event.data
};
$expr_l58_c18.tagname='undefined';
$expr_l58_c18.line=58;
$expr_l58_c18.column=18;
function $assign_l58_c5(_event){
command = $expr_l58_c18.apply(this, arguments);
};
$assign_l58_c5.tagname='assign';
$assign_l58_c5.line=58;
$assign_l58_c5.column=5;
function $cond_l60_c21(_event){
return command_name == 'Send'
};
$cond_l60_c21.tagname='undefined';
$cond_l60_c21.line=60;
$cond_l60_c21.column=21;
function $cond_l61_c21(_event){
return command_name == 'Play'
};
$cond_l61_c21.tagname='undefined';
$cond_l61_c21.line=61;
$cond_l61_c21.column=21;
function $cond_l62_c21(_event){
return command_name == 'Record'
};
$cond_l62_c21.tagname='undefined';
$cond_l62_c21.line=62;
$cond_l62_c21.column=21;
function $cond_l63_c21(_event){
return command_name == 'ShowInfo'
};
$cond_l63_c21.tagname='undefined';
$cond_l63_c21.line=63;
$cond_l63_c21.column=21;
function $cond_l64_c21(_event){
return command_name == 'Rating'
};
$cond_l64_c21.tagname='undefined';
$cond_l64_c21.line=64;
$cond_l64_c21.column=21;
function $cond_l65_c21(_event){
return command_name == 'RadarStart'
};
$cond_l65_c21.tagname='undefined';
$cond_l65_c21.line=65;
$cond_l65_c21.column=21;
function $cond_l66_c21(_event){
return command_name == 'ShowPOIs'
};
$cond_l66_c21.tagname='undefined';
$cond_l66_c21.line=66;
$cond_l66_c21.column=21;
function $cond_l67_c21(_event){
return command_name == 'ShowAppointments'
};
$cond_l67_c21.tagname='undefined';
$cond_l67_c21.line=67;
$cond_l67_c21.column=21;
function $cond_l68_c21(_event){
return command_name == 'CreateAppointment'
};
$cond_l68_c21.tagname='undefined';
$cond_l68_c21.line=68;
$cond_l68_c21.column=21;
function $cond_l69_c21(_event){
return command_name == 'RecordMemo'
};
$cond_l69_c21.tagname='undefined';
$cond_l69_c21.line=69;
$cond_l69_c21.column=21;
function $cond_l70_c21(_event){
return command_name == 'FindPerson'
};
$cond_l70_c21.tagname='undefined';
$cond_l70_c21.line=70;
$cond_l70_c21.column=21;
function $cond_l71_c21(_event){
return command_name == 'NoMatch'
};
$cond_l71_c21.tagname='undefined';
$cond_l71_c21.line=71;
$cond_l71_c21.column=21;
function $script_l75_c5(_event){

		    var dm = null;//TODO: mmir.CalendarModel.getInstance().getDiscourseManager();
		   	if (dm == null) {
		   		var msg = mmir.lang.getText('did_not_understand_msg');
				mmir.media.textToSpeech(msg);
			} else {
				dm.getCommand().parse(command);
			}
   
};
$script_l75_c5.tagname='script';
$script_l75_c5.line=75;
$script_l75_c5.column=5;
function $script_l88_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();

	    //dummy code:
		console.info('sending ....')
		alert('sending ....');
	
};
$script_l88_c5.tagname='script';
$script_l88_c5.line=88;
$script_l88_c5.column=5;
function $script_l99_c5(_event){

        //dummy code:
        console.info('play something ...')
        alert('play something ...');
    
};
$script_l99_c5.tagname='script';
$script_l99_c5.line=99;
$script_l99_c5.column=5;
function $script_l108_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('click_on_rec_btn');
	
};
$script_l108_c5.tagname='script';
$script_l108_c5.line=108;
$script_l108_c5.column=5;
function $script_l116_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('poi.display_details');
	
};
$script_l116_c5.tagname='script';
$script_l116_c5.line=116;
$script_l116_c5.column=5;
function $script_l124_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
        //dummy code:
        console.info('rating ...')
		alert('rating ....');
	
};
$script_l124_c5.tagname='script';
$script_l124_c5.line=124;
$script_l124_c5.column=5;
function $script_l134_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('click_on_radar_btn');
	
};
$script_l134_c5.tagname='script';
$script_l134_c5.line=134;
$script_l134_c5.column=5;
function $script_l142_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('click_on_start_radio_btn', emma);
	
};
$script_l142_c5.tagname='script';
$script_l142_c5.line=142;
$script_l142_c5.column=5;
function $script_l150_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('click_on_start_audio_btn', emma);
	
};
$script_l150_c5.tagname='script';
$script_l150_c5.line=150;
$script_l150_c5.column=5;
function $script_l158_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.MediaManager.textToSpeech('Sie können zurzeit nur Audio und lokationsbasiertes Radio abspielen.',null, null);
	
};
$script_l158_c5.tagname='script';
$script_l158_c5.line=158;
$script_l158_c5.column=5;
function $script_l166_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('show_appointments_speech', command);
	
};
$script_l166_c5.tagname='script';
$script_l166_c5.line=166;
$script_l166_c5.column=5;
function $script_l174_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
		mmir.dialog.raise('create_appointment_speech', command);
	
};
$script_l174_c5.tagname='script';
$script_l174_c5.line=174;
$script_l174_c5.column=5;
function $script_l182_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
	    mmir.dialog.performHelper('Calendar', 'capture');
	
};
$script_l182_c5.tagname='script';
$script_l182_c5.line=182;
$script_l182_c5.column=5;
function $script_l190_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
	    mmir.dialog.perform('Calendar', 'find_person', command);
	
};
$script_l190_c5.tagname='script';
$script_l190_c5.line=190;
$script_l190_c5.column=5;
function $script_l198_c5(_event){

	    mmir.CalendarModel.getInstance().clearDiscourseManager();
        //dummy code:
        console.info('showing some pois ...')
		alert('showing some pois ...');
	
};
$script_l198_c5.tagname='script';
$script_l198_c5.line=198;
$script_l198_c5.column=5;
function $expr_l230_c19(_event){
return _event.data
};
$expr_l230_c19.tagname='undefined';
$expr_l230_c19.line=230;
$expr_l230_c19.column=19;
function $assign_l230_c6(_event){
data = $expr_l230_c19.apply(this, arguments);
};
$assign_l230_c6.tagname='assign';
$assign_l230_c6.line=230;
$assign_l230_c6.column=6;
function $expr_l227_c19(_event){
return {}
};
$expr_l227_c19.tagname='undefined';
$expr_l227_c19.line=227;
$expr_l227_c19.column=19;
function $assign_l227_c6(_event){
data = $expr_l227_c19.apply(this, arguments);
};
$assign_l227_c6.tagname='assign';
$assign_l227_c6.line=227;
$assign_l227_c6.column=6;
function $script_l249_c6(_event){

         mmir.dialog.raise('back');
	 
};
$script_l249_c6.tagname='script';
$script_l249_c6.line=249;
$script_l249_c6.column=6;
function $script_l257_c6(_event){

         mmir.dialog.raise('click_on_login_btn');
	 
};
$script_l257_c6.tagname='script';
$script_l257_c6.line=257;
$script_l257_c6.column=6;
function $script_l265_c6(_event){

         mmir.dialog.raise('click_on_register_btn');
	 
};
$script_l265_c6.tagname='script';
$script_l265_c6.line=265;
$script_l265_c6.column=6;
function $script_l273_c6(_event){

         mmir.dialog.raise('click_on_sign_up_btn');
	 
};
$script_l273_c6.tagname='script';
$script_l273_c6.line=273;
$script_l273_c6.column=6;
function $script_l281_c6(_event){

         mmir.dialog.raise('click_on_appointment_btn');
	 
};
$script_l281_c6.tagname='script';
$script_l281_c6.line=281;
$script_l281_c6.column=6;
function $script_l289_c6(_event){

         mmir.dialog.raise('click_on_save_appointment_btn');
	 
};
$script_l289_c6.tagname='script';
$script_l289_c6.line=289;
$script_l289_c6.column=6;
function $script_l297_c6(_event){

         mmir.dialog.raise('click_on_discard_appointment_btn');
	 
};
$script_l297_c6.tagname='script';
$script_l297_c6.line=297;
$script_l297_c6.column=6;
function $script_l305_c6(_event){

         mmir.dialog.raise('click_on_language_btn', data);
	
};
$script_l305_c6.tagname='script';
$script_l305_c6.line=305;
$script_l305_c6.column=6;
function $script_l313_c6(_event){

         mmir.dialog.raise('language_choosen', data);
     
};
$script_l313_c6.tagname='script';
$script_l313_c6.line=313;
$script_l313_c6.column=6;
function $data_l30_c15(_event){
return new Object()
};
$data_l30_c15.tagname='undefined';
$data_l30_c15.line=30;
$data_l30_c15.column=15;
function $datamodel_l29_c3(_event){
if(typeof data === "undefined")  data = $data_l30_c15.apply(this, arguments);
};
$datamodel_l29_c3.tagname='datamodel';
$datamodel_l29_c3.line=29;
$datamodel_l29_c3.column=3;
function $data_l38_c16(_event){
return ''
};
$data_l38_c16.tagname='undefined';
$data_l38_c16.line=38;
$data_l38_c16.column=16;
function $data_l39_c16(_event){
return {}
};
$data_l39_c16.tagname='undefined';
$data_l39_c16.line=39;
$data_l39_c16.column=16;
function $data_l40_c16(_event){
return {"Emma": { "medium": "acoustic" , "mode" : "voice" }}
};
$data_l40_c16.tagname='undefined';
$data_l40_c16.line=40;
$data_l40_c16.column=16;
function $datamodel_l37_c4(_event){
if(typeof command_name === "undefined")  command_name = $data_l38_c16.apply(this, arguments);
if(typeof command === "undefined")  command = $data_l39_c16.apply(this, arguments);
if(typeof emma === "undefined")  emma = $data_l40_c16.apply(this, arguments);
};
$datamodel_l37_c4.tagname='datamodel';
$datamodel_l37_c4.line=37;
$datamodel_l37_c4.column=4;
return {
 "initial": "input_manager_initial_state",
 "name": "input",
 "{http://www.w3.org/2000/xmlns/}": "http://www.w3.org/2005/07/scxml",
 "$type": "scxml",
 "id": "$generated-scxml-0",
 "states": [
  {
   "id": "input_manager_initial_state",
   "initial": "touch_input",
   "name": "input_manager_initial_state",
   "$type": "state",
   "transitions": [
    {
     "event": "speech_input_event",
     "target": "speech_input",
     "$closeLine": 33,
     "$closeColumn": 65
    },
    {
     "event": "touch_input_event",
     "target": "touch_input",
     "$closeLine": 34,
     "$closeColumn": 63
    }
   ],
   "states": [
    {
     "id": "speech_input",
     "name": "speech_input",
     "$type": "state",
     "onEntry": [
      $script_l43_c5,
      $assign_l57_c5,
      $assign_l58_c5
     ],
     "transitions": [
      {
       "cond": $cond_l60_c21,
       "target": "send",
       "$closeLine": 60,
       "$closeColumn": 71
      },
      {
       "cond": $cond_l61_c21,
       "target": "play",
       "$closeLine": 61,
       "$closeColumn": 71
      },
      {
       "cond": $cond_l62_c21,
       "target": "record",
       "$closeLine": 62,
       "$closeColumn": 75
      },
      {
       "cond": $cond_l63_c21,
       "target": "show_info",
       "$closeLine": 63,
       "$closeColumn": 80
      },
      {
       "cond": $cond_l64_c21,
       "target": "rating",
       "$closeLine": 64,
       "$closeColumn": 75
      },
      {
       "cond": $cond_l65_c21,
       "target": "start_radar",
       "$closeLine": 65,
       "$closeColumn": 84
      },
      {
       "cond": $cond_l66_c21,
       "target": "show_pois",
       "$closeLine": 66,
       "$closeColumn": 80
      },
      {
       "cond": $cond_l67_c21,
       "target": "show_appointments",
       "$closeLine": 67,
       "$closeColumn": 96
      },
      {
       "cond": $cond_l68_c21,
       "target": "create_appointment",
       "$closeLine": 68,
       "$closeColumn": 98
      },
      {
       "cond": $cond_l69_c21,
       "target": "record_memo",
       "$closeLine": 69,
       "$closeColumn": 84
      },
      {
       "cond": $cond_l70_c21,
       "target": "find_person",
       "$closeLine": 70,
       "$closeColumn": 84
      },
      {
       "cond": $cond_l71_c21,
       "target": "no_match",
       "$closeLine": 71,
       "$closeColumn": 78
      }
     ],
     "$closeLine": 72,
     "$closeColumn": 4
    },
    {
     "id": "no_match",
     "name": "no_match",
     "$type": "state",
     "onEntry": [
      $script_l75_c5
     ],
     "$closeLine": 85,
     "$closeColumn": 4
    },
    {
     "id": "send",
     "name": "send",
     "$type": "state",
     "onEntry": [
      $script_l88_c5
     ],
     "$closeLine": 96,
     "$closeColumn": 4
    },
    {
     "id": "play",
     "name": "play",
     "$type": "state",
     "onEntry": [
      $script_l99_c5
     ],
     "$closeLine": 105,
     "$closeColumn": 4
    },
    {
     "id": "record",
     "name": "record",
     "$type": "state",
     "onEntry": [
      $script_l108_c5
     ],
     "$closeLine": 113,
     "$closeColumn": 4
    },
    {
     "id": "show_info",
     "name": "show_info",
     "$type": "state",
     "onEntry": [
      $script_l116_c5
     ],
     "$closeLine": 121,
     "$closeColumn": 4
    },
    {
     "id": "rating",
     "name": "rating",
     "$type": "state",
     "onEntry": [
      $script_l124_c5
     ],
     "$closeLine": 131,
     "$closeColumn": 4
    },
    {
     "id": "start_radar",
     "name": "start_radar",
     "$type": "state",
     "onEntry": [
      $script_l134_c5
     ],
     "$closeLine": 139,
     "$closeColumn": 4
    },
    {
     "id": "play_radio",
     "name": "play_radio",
     "$type": "state",
     "onEntry": [
      $script_l142_c5
     ],
     "$closeLine": 147,
     "$closeColumn": 4
    },
    {
     "id": "play_audio",
     "name": "play_audio",
     "$type": "state",
     "onEntry": [
      $script_l150_c5
     ],
     "$closeLine": 155,
     "$closeColumn": 4
    },
    {
     "id": "play_voice",
     "name": "play_voice",
     "$type": "state",
     "onEntry": [
      $script_l158_c5
     ],
     "$closeLine": 163,
     "$closeColumn": 4
    },
    {
     "id": "show_appointments",
     "name": "show_appointments",
     "$type": "state",
     "onEntry": [
      $script_l166_c5
     ],
     "$closeLine": 171,
     "$closeColumn": 4
    },
    {
     "id": "create_appointment",
     "name": "create_appointment",
     "$type": "state",
     "onEntry": [
      $script_l174_c5
     ],
     "$closeLine": 179,
     "$closeColumn": 4
    },
    {
     "id": "record_memo",
     "name": "record_memo",
     "$type": "state",
     "onEntry": [
      $script_l182_c5
     ],
     "$closeLine": 187,
     "$closeColumn": 4
    },
    {
     "id": "find_person",
     "name": "find_person",
     "$type": "state",
     "onEntry": [
      $script_l190_c5
     ],
     "$closeLine": 195,
     "$closeColumn": 4
    },
    {
     "id": "show_pois",
     "name": "show_pois",
     "$type": "state",
     "onEntry": [
      $script_l198_c5
     ],
     "$closeLine": 205,
     "$closeColumn": 4
    },
    {
     "id": "touch_input",
     "initial": "start_touch",
     "name": "touch_input",
     "$type": "state",
     "states": [
      {
       "id": "start_touch",
       "name": "start_touch",
       "$type": "state",
       "onEntry": [
        $assign_l227_c6
       ],
       "onExit": [
        $assign_l230_c6
       ],
       "transitions": [
        {
         "event": "back",
         "target": "back",
         "$closeLine": 233,
         "$closeColumn": 45
        },
        {
         "event": "click_on_login_btn",
         "target": "login",
         "$closeLine": 234,
         "$closeColumn": 60
        },
        {
         "event": "click_on_register_btn",
         "target": "register",
         "$closeLine": 235,
         "$closeColumn": 66
        },
        {
         "event": "click_on_sign_up_btn",
         "target": "sign_up",
         "$closeLine": 236,
         "$closeColumn": 64
        },
        {
         "event": "click_on_appointment_btn",
         "target": "appointment",
         "$closeLine": 238,
         "$closeColumn": 72
        },
        {
         "event": "click_on_save_appointment_btn",
         "target": "save_appointment",
         "$closeLine": 239,
         "$closeColumn": 82
        },
        {
         "event": "click_on_discard_appointment_btn",
         "target": "discard_appointment",
         "$closeLine": 240,
         "$closeColumn": 88
        },
        {
         "event": "click_on_language_btn",
         "name": "click_on_language_btn",
         "target": "language_btn",
         "$closeLine": 242,
         "$closeColumn": 202
        },
        {
         "event": "language_choosen",
         "name": "language_choosen",
         "target": "language_chosen",
         "$closeLine": 243,
         "$closeColumn": 198
        }
       ],
       "$closeLine": 245,
       "$closeColumn": 5
      },
      {
       "id": "back",
       "name": "back",
       "$type": "state",
       "onEntry": [
        $script_l249_c6
       ],
       "$closeLine": 253,
       "$closeColumn": 5
      },
      {
       "id": "login",
       "name": "login",
       "$type": "state",
       "onEntry": [
        $script_l257_c6
       ],
       "$closeLine": 261,
       "$closeColumn": 5
      },
      {
       "id": "register",
       "name": "register",
       "$type": "state",
       "onEntry": [
        $script_l265_c6
       ],
       "$closeLine": 269,
       "$closeColumn": 5
      },
      {
       "id": "sign_up",
       "name": "sign_up",
       "$type": "state",
       "onEntry": [
        $script_l273_c6
       ],
       "$closeLine": 277,
       "$closeColumn": 5
      },
      {
       "id": "appointment",
       "name": "appointment",
       "$type": "state",
       "onEntry": [
        $script_l281_c6
       ],
       "$closeLine": 285,
       "$closeColumn": 5
      },
      {
       "id": "save_appointment",
       "name": "save_appointment",
       "$type": "state",
       "onEntry": [
        $script_l289_c6
       ],
       "$closeLine": 293,
       "$closeColumn": 5
      },
      {
       "id": "discard_appointment",
       "name": "discard_appointment",
       "$type": "state",
       "onEntry": [
        $script_l297_c6
       ],
       "$closeLine": 301,
       "$closeColumn": 5
      },
      {
       "id": "language_btn",
       "name": "language_btn",
       "$type": "state",
       "onEntry": [
        $script_l305_c6
       ],
       "$closeLine": 309,
       "$closeColumn": 5
      },
      {
       "id": "language_chosen",
       "name": "language_chosen",
       "$type": "state",
       "onEntry": [
        $script_l313_c6
       ],
       "$closeLine": 317,
       "$closeColumn": 5
      }
     ],
     "$closeLine": 319,
     "$closeColumn": 4
    }
   ],
   "$closeLine": 320,
   "$closeColumn": 3
  }
 ],
 "$closeLine": 321,
 "$closeColumn": 2,
 "onEntry": [
  $datamodel_l29_c3,
  $datamodel_l37_c4
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "input"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});