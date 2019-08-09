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
function $script_l18_c7(_event){

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
          
          command_name = actionName;
      
};
$script_l18_c7.tagname='script';
$script_l18_c7.line=18;
$script_l18_c7.column=7;
function $expr_l33_c20(_event){
return _event.data
};
$expr_l33_c20.tagname='undefined';
$expr_l33_c20.line=33;
$expr_l33_c20.column=20;
function $assign_l33_c7(_event){
command = $expr_l33_c20.apply(this, arguments);
};
$assign_l33_c7.tagname='assign';
$assign_l33_c7.line=33;
$assign_l33_c7.column=7;
function $cond_l35_c22(_event){
return command_name == 'Send'
};
$cond_l35_c22.tagname='undefined';
$cond_l35_c22.line=35;
$cond_l35_c22.column=22;
function $cond_l36_c22(_event){
return command_name == 'Play'
};
$cond_l36_c22.tagname='undefined';
$cond_l36_c22.line=36;
$cond_l36_c22.column=22;
function $cond_l37_c22(_event){
return command_name == 'Record'
};
$cond_l37_c22.tagname='undefined';
$cond_l37_c22.line=37;
$cond_l37_c22.column=22;
function $cond_l38_c22(_event){
return command_name == 'ShowInfo'
};
$cond_l38_c22.tagname='undefined';
$cond_l38_c22.line=38;
$cond_l38_c22.column=22;
function $cond_l39_c22(_event){
return command_name == 'Rating'
};
$cond_l39_c22.tagname='undefined';
$cond_l39_c22.line=39;
$cond_l39_c22.column=22;
function $cond_l40_c22(_event){
return command_name == 'RadarStart'
};
$cond_l40_c22.tagname='undefined';
$cond_l40_c22.line=40;
$cond_l40_c22.column=22;
function $cond_l41_c22(_event){
return command_name == 'ShowPOIs'
};
$cond_l41_c22.tagname='undefined';
$cond_l41_c22.line=41;
$cond_l41_c22.column=22;
function $cond_l42_c22(_event){
return command_name == 'ShowAppointments'
};
$cond_l42_c22.tagname='undefined';
$cond_l42_c22.line=42;
$cond_l42_c22.column=22;
function $cond_l43_c22(_event){
return command_name == 'CreateAppointment'
};
$cond_l43_c22.tagname='undefined';
$cond_l43_c22.line=43;
$cond_l43_c22.column=22;
function $cond_l44_c22(_event){
return command_name == 'RecordMemo'
};
$cond_l44_c22.tagname='undefined';
$cond_l44_c22.line=44;
$cond_l44_c22.column=22;
function $cond_l45_c22(_event){
return command_name == 'FindPerson'
};
$cond_l45_c22.tagname='undefined';
$cond_l45_c22.line=45;
$cond_l45_c22.column=22;
function $cond_l46_c22(_event){
return command_name == 'NoMatch'
};
$cond_l46_c22.tagname='undefined';
$cond_l46_c22.line=46;
$cond_l46_c22.column=22;
function $script_l50_c7(_event){

        var dm = null;//TODO: mmir.CalendarModel.getInstance().getDiscourseManager();
        if (dm == null) {
          var msg = mmir.lang.getText('did_not_understand_msg');
          mmir.media.textToSpeech(msg);
        } else {
          dm.getCommand().parse(command);
        }
     
};
$script_l50_c7.tagname='script';
$script_l50_c7.line=50;
$script_l50_c7.column=7;
function $script_l63_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();

        //dummy code:
        console.info('sending ....')
        alert('sending ....');
      
};
$script_l63_c7.tagname='script';
$script_l63_c7.line=63;
$script_l63_c7.column=7;
function $script_l74_c7(_event){

          //dummy code:
          console.info('play something ...')
          alert('play something ...');
      
};
$script_l74_c7.tagname='script';
$script_l74_c7.line=74;
$script_l74_c7.column=7;
function $script_l83_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('click_on_rec_btn');
      
};
$script_l83_c7.tagname='script';
$script_l83_c7.line=83;
$script_l83_c7.column=7;
function $script_l91_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('poi.display_details');
      
};
$script_l91_c7.tagname='script';
$script_l91_c7.line=91;
$script_l91_c7.column=7;
function $script_l99_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        //dummy code:
        console.info('rating ...')
        alert('rating ....');
      
};
$script_l99_c7.tagname='script';
$script_l99_c7.line=99;
$script_l99_c7.column=7;
function $script_l109_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('click_on_radar_btn');
      
};
$script_l109_c7.tagname='script';
$script_l109_c7.line=109;
$script_l109_c7.column=7;
function $script_l117_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('click_on_start_radio_btn', emma);
      
};
$script_l117_c7.tagname='script';
$script_l117_c7.line=117;
$script_l117_c7.column=7;
function $script_l125_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('click_on_start_audio_btn', emma);
      
};
$script_l125_c7.tagname='script';
$script_l125_c7.line=125;
$script_l125_c7.column=7;
function $script_l133_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.MediaManager.textToSpeech('Sie können zurzeit nur Audio und lokationsbasiertes Radio abspielen.',null, null);
      
};
$script_l133_c7.tagname='script';
$script_l133_c7.line=133;
$script_l133_c7.column=7;
function $script_l141_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('show_appointments_speech', command);
      
};
$script_l141_c7.tagname='script';
$script_l141_c7.line=141;
$script_l141_c7.column=7;
function $script_l149_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.raise('create_appointment_speech', command);
      
};
$script_l149_c7.tagname='script';
$script_l149_c7.line=149;
$script_l149_c7.column=7;
function $script_l157_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.performHelper('Calendar', 'capture');
      
};
$script_l157_c7.tagname='script';
$script_l157_c7.line=157;
$script_l157_c7.column=7;
function $script_l165_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        mmir.dialog.perform('Calendar', 'find_person', command);
      
};
$script_l165_c7.tagname='script';
$script_l165_c7.line=165;
$script_l165_c7.column=7;
function $script_l173_c7(_event){

        mmir.CalendarModel.getInstance().clearDiscourseManager();
        //dummy code:
        console.info('showing some pois ...')
        alert('showing some pois ...');
      
};
$script_l173_c7.tagname='script';
$script_l173_c7.line=173;
$script_l173_c7.column=7;
function $expr_l205_c20(_event){
return _event.data
};
$expr_l205_c20.tagname='undefined';
$expr_l205_c20.line=205;
$expr_l205_c20.column=20;
function $assign_l205_c7(_event){
data = $expr_l205_c20.apply(this, arguments);
};
$assign_l205_c7.tagname='assign';
$assign_l205_c7.line=205;
$assign_l205_c7.column=7;
function $expr_l202_c21(_event){
return {}
};
$expr_l202_c21.tagname='undefined';
$expr_l202_c21.line=202;
$expr_l202_c21.column=21;
function $assign_l202_c8(_event){
data = $expr_l202_c21.apply(this, arguments);
};
$assign_l202_c8.tagname='assign';
$assign_l202_c8.line=202;
$assign_l202_c8.column=8;
function $script_l224_c9(_event){

          mmir.dialog.raise('back');
        
};
$script_l224_c9.tagname='script';
$script_l224_c9.line=224;
$script_l224_c9.column=9;
function $script_l232_c9(_event){

          mmir.dialog.raise('click_on_login_btn');
        
};
$script_l232_c9.tagname='script';
$script_l232_c9.line=232;
$script_l232_c9.column=9;
function $script_l240_c9(_event){

          mmir.dialog.raise('click_on_register_btn');
        
};
$script_l240_c9.tagname='script';
$script_l240_c9.line=240;
$script_l240_c9.column=9;
function $script_l248_c9(_event){

          mmir.dialog.raise('click_on_sign_up_btn');
        
};
$script_l248_c9.tagname='script';
$script_l248_c9.line=248;
$script_l248_c9.column=9;
function $script_l256_c9(_event){

          mmir.dialog.raise('click_on_appointment_btn');
        
};
$script_l256_c9.tagname='script';
$script_l256_c9.line=256;
$script_l256_c9.column=9;
function $script_l264_c9(_event){

          mmir.dialog.raise('click_on_save_appointment_btn');
        
};
$script_l264_c9.tagname='script';
$script_l264_c9.line=264;
$script_l264_c9.column=9;
function $script_l272_c9(_event){

          mmir.dialog.raise('click_on_discard_appointment_btn');
        
};
$script_l272_c9.tagname='script';
$script_l272_c9.line=272;
$script_l272_c9.column=9;
function $script_l280_c9(_event){

          mmir.dialog.raise('click_on_language_btn', data);
        
};
$script_l280_c9.tagname='script';
$script_l280_c9.line=280;
$script_l280_c9.column=9;
function $script_l288_c9(_event){

          mmir.dialog.raise('language_choosen', data);
        
};
$script_l288_c9.tagname='script';
$script_l288_c9.line=288;
$script_l288_c9.column=9;
function $data_l5_c15(_event){
return new Object()
};
$data_l5_c15.tagname='undefined';
$data_l5_c15.line=5;
$data_l5_c15.column=15;
function $datamodel_l4_c3(_event){
if(typeof data === "undefined")  data = $data_l5_c15.apply(this, arguments);
};
$datamodel_l4_c3.tagname='datamodel';
$datamodel_l4_c3.line=4;
$datamodel_l4_c3.column=3;
function $data_l13_c18(_event){
return ''
};
$data_l13_c18.tagname='undefined';
$data_l13_c18.line=13;
$data_l13_c18.column=18;
function $data_l14_c18(_event){
return {}
};
$data_l14_c18.tagname='undefined';
$data_l14_c18.line=14;
$data_l14_c18.column=18;
function $data_l15_c18(_event){
return {"Emma": { "medium": "acoustic" , "mode" : "voice" }}
};
$data_l15_c18.tagname='undefined';
$data_l15_c18.line=15;
$data_l15_c18.column=18;
function $datamodel_l12_c5(_event){
if(typeof command_name === "undefined")  command_name = $data_l13_c18.apply(this, arguments);
if(typeof command === "undefined")  command = $data_l14_c18.apply(this, arguments);
if(typeof emma === "undefined")  emma = $data_l15_c18.apply(this, arguments);
};
$datamodel_l12_c5.tagname='datamodel';
$datamodel_l12_c5.line=12;
$datamodel_l12_c5.column=5;
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
     "$closeLine": 8,
     "$closeColumn": 65
    },
    {
     "event": "touch_input_event",
     "target": "touch_input",
     "$closeLine": 9,
     "$closeColumn": 63
    }
   ],
   "states": [
    {
     "id": "speech_input",
     "name": "speech_input",
     "$type": "state",
     "onEntry": [
      $script_l18_c7,
      $assign_l33_c7
     ],
     "transitions": [
      {
       "cond": $cond_l35_c22,
       "target": "send",
       "$closeLine": 35,
       "$closeColumn": 72
      },
      {
       "cond": $cond_l36_c22,
       "target": "play",
       "$closeLine": 36,
       "$closeColumn": 72
      },
      {
       "cond": $cond_l37_c22,
       "target": "record",
       "$closeLine": 37,
       "$closeColumn": 76
      },
      {
       "cond": $cond_l38_c22,
       "target": "show_info",
       "$closeLine": 38,
       "$closeColumn": 81
      },
      {
       "cond": $cond_l39_c22,
       "target": "rating",
       "$closeLine": 39,
       "$closeColumn": 76
      },
      {
       "cond": $cond_l40_c22,
       "target": "start_radar",
       "$closeLine": 40,
       "$closeColumn": 85
      },
      {
       "cond": $cond_l41_c22,
       "target": "show_pois",
       "$closeLine": 41,
       "$closeColumn": 81
      },
      {
       "cond": $cond_l42_c22,
       "target": "show_appointments",
       "$closeLine": 42,
       "$closeColumn": 97
      },
      {
       "cond": $cond_l43_c22,
       "target": "create_appointment",
       "$closeLine": 43,
       "$closeColumn": 99
      },
      {
       "cond": $cond_l44_c22,
       "target": "record_memo",
       "$closeLine": 44,
       "$closeColumn": 85
      },
      {
       "cond": $cond_l45_c22,
       "target": "find_person",
       "$closeLine": 45,
       "$closeColumn": 85
      },
      {
       "cond": $cond_l46_c22,
       "target": "no_match",
       "$closeLine": 46,
       "$closeColumn": 79
      }
     ],
     "$closeLine": 47,
     "$closeColumn": 4
    },
    {
     "id": "no_match",
     "name": "no_match",
     "$type": "state",
     "onEntry": [
      $script_l50_c7
     ],
     "$closeLine": 60,
     "$closeColumn": 4
    },
    {
     "id": "send",
     "name": "send",
     "$type": "state",
     "onEntry": [
      $script_l63_c7
     ],
     "$closeLine": 71,
     "$closeColumn": 4
    },
    {
     "id": "play",
     "name": "play",
     "$type": "state",
     "onEntry": [
      $script_l74_c7
     ],
     "$closeLine": 80,
     "$closeColumn": 4
    },
    {
     "id": "record",
     "name": "record",
     "$type": "state",
     "onEntry": [
      $script_l83_c7
     ],
     "$closeLine": 88,
     "$closeColumn": 4
    },
    {
     "id": "show_info",
     "name": "show_info",
     "$type": "state",
     "onEntry": [
      $script_l91_c7
     ],
     "$closeLine": 96,
     "$closeColumn": 4
    },
    {
     "id": "rating",
     "name": "rating",
     "$type": "state",
     "onEntry": [
      $script_l99_c7
     ],
     "$closeLine": 106,
     "$closeColumn": 4
    },
    {
     "id": "start_radar",
     "name": "start_radar",
     "$type": "state",
     "onEntry": [
      $script_l109_c7
     ],
     "$closeLine": 114,
     "$closeColumn": 4
    },
    {
     "id": "play_radio",
     "name": "play_radio",
     "$type": "state",
     "onEntry": [
      $script_l117_c7
     ],
     "$closeLine": 122,
     "$closeColumn": 4
    },
    {
     "id": "play_audio",
     "name": "play_audio",
     "$type": "state",
     "onEntry": [
      $script_l125_c7
     ],
     "$closeLine": 130,
     "$closeColumn": 4
    },
    {
     "id": "play_voice",
     "name": "play_voice",
     "$type": "state",
     "onEntry": [
      $script_l133_c7
     ],
     "$closeLine": 138,
     "$closeColumn": 4
    },
    {
     "id": "show_appointments",
     "name": "show_appointments",
     "$type": "state",
     "onEntry": [
      $script_l141_c7
     ],
     "$closeLine": 146,
     "$closeColumn": 4
    },
    {
     "id": "create_appointment",
     "name": "create_appointment",
     "$type": "state",
     "onEntry": [
      $script_l149_c7
     ],
     "$closeLine": 154,
     "$closeColumn": 4
    },
    {
     "id": "record_memo",
     "name": "record_memo",
     "$type": "state",
     "onEntry": [
      $script_l157_c7
     ],
     "$closeLine": 162,
     "$closeColumn": 4
    },
    {
     "id": "find_person",
     "name": "find_person",
     "$type": "state",
     "onEntry": [
      $script_l165_c7
     ],
     "$closeLine": 170,
     "$closeColumn": 4
    },
    {
     "id": "show_pois",
     "name": "show_pois",
     "$type": "state",
     "onEntry": [
      $script_l173_c7
     ],
     "$closeLine": 180,
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
        $assign_l202_c8
       ],
       "onExit": [
        $assign_l205_c7
       ],
       "transitions": [
        {
         "event": "back",
         "target": "back",
         "$closeLine": 208,
         "$closeColumn": 47
        },
        {
         "event": "click_on_login_btn",
         "target": "login",
         "$closeLine": 209,
         "$closeColumn": 62
        },
        {
         "event": "click_on_register_btn",
         "target": "register",
         "$closeLine": 210,
         "$closeColumn": 68
        },
        {
         "event": "click_on_sign_up_btn",
         "target": "sign_up",
         "$closeLine": 211,
         "$closeColumn": 66
        },
        {
         "event": "click_on_appointment_btn",
         "target": "appointment",
         "$closeLine": 213,
         "$closeColumn": 74
        },
        {
         "event": "click_on_save_appointment_btn",
         "target": "save_appointment",
         "$closeLine": 214,
         "$closeColumn": 84
        },
        {
         "event": "click_on_discard_appointment_btn",
         "target": "discard_appointment",
         "$closeLine": 215,
         "$closeColumn": 90
        },
        {
         "event": "click_on_language_btn",
         "name": "click_on_language_btn",
         "target": "language_btn",
         "$closeLine": 217,
         "$closeColumn": 101
        },
        {
         "event": "language_choosen",
         "name": "language_choosen",
         "target": "language_chosen",
         "$closeLine": 218,
         "$closeColumn": 94
        }
       ],
       "$closeLine": 220,
       "$closeColumn": 6
      },
      {
       "id": "back",
       "name": "back",
       "$type": "state",
       "onEntry": [
        $script_l224_c9
       ],
       "$closeLine": 228,
       "$closeColumn": 6
      },
      {
       "id": "login",
       "name": "login",
       "$type": "state",
       "onEntry": [
        $script_l232_c9
       ],
       "$closeLine": 236,
       "$closeColumn": 6
      },
      {
       "id": "register",
       "name": "register",
       "$type": "state",
       "onEntry": [
        $script_l240_c9
       ],
       "$closeLine": 244,
       "$closeColumn": 6
      },
      {
       "id": "sign_up",
       "name": "sign_up",
       "$type": "state",
       "onEntry": [
        $script_l248_c9
       ],
       "$closeLine": 252,
       "$closeColumn": 6
      },
      {
       "id": "appointment",
       "name": "appointment",
       "$type": "state",
       "onEntry": [
        $script_l256_c9
       ],
       "$closeLine": 260,
       "$closeColumn": 6
      },
      {
       "id": "save_appointment",
       "name": "save_appointment",
       "$type": "state",
       "onEntry": [
        $script_l264_c9
       ],
       "$closeLine": 268,
       "$closeColumn": 6
      },
      {
       "id": "discard_appointment",
       "name": "discard_appointment",
       "$type": "state",
       "onEntry": [
        $script_l272_c9
       ],
       "$closeLine": 276,
       "$closeColumn": 6
      },
      {
       "id": "language_btn",
       "name": "language_btn",
       "$type": "state",
       "onEntry": [
        $script_l280_c9
       ],
       "$closeLine": 284,
       "$closeColumn": 6
      },
      {
       "id": "language_chosen",
       "name": "language_chosen",
       "$type": "state",
       "onEntry": [
        $script_l288_c9
       ],
       "$closeLine": 292,
       "$closeColumn": 6
      }
     ],
     "$closeLine": 294,
     "$closeColumn": 4
    }
   ],
   "$closeLine": 296,
   "$closeColumn": 2
  }
 ],
 "$closeLine": 297,
 "$closeColumn": 2,
 "onEntry": [
  $datamodel_l4_c3,
  $datamodel_l12_c5
 ],
 "$deserializeDatamodel": $deserializeDatamodel,
 "$serializeDatamodel": $serializeDatamodel,
 "docUrl": "input"
};
};
ScxmlModel.prepare = function(prepareCallback, executionContext, hostContext) {if(!prepareCallback) return; setTimeout(function(){prepareCallback(null, ScxmlModel)}, 0);};
module.exports = ScxmlModel;
});