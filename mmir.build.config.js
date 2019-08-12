
/*
 * Example mmir build configuration:
 *
 * this file is automatically loaded by mmir-tooling/utils/cordova-build-tool.js:
 * if mmir.build.config.js (in project root) does not exist, the default values
 * are used.
 *
 * If it does exist, it must export a build configuration (see below):
 * if the configuration does not contain any options, the default
 * build settings will be used.
 */

const path = require('path');

//default config (empty build config):
// will use default options, i.e. use resourcesPath "www" for searching for mmir resources
const defaultConfig = {};

//example build config using a dialog state-model that renders
// animated view-transitions when changing views.
//Enable by exporting this variable instead of defaultConfig.
const stateModelWithViewTransitions = {
  states: {
    //define dialog state-model by specifying the file path directly
    models: {
      //use state-model with view-transitions:
      dialog: {
        file: path.resolve(__dirname, 'www/config/states-examples/example-view_transitions-dialogDescriptionSCXML.xml'),
      }
    }
  }
}

module.exports = defaultConfig;
// module.exports = stateModelWithViewTransitions;
