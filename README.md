[mmir-starter-kit][0]
===========

![GitHub](https://img.shields.io/github/license/mmig/mmir-starter-kit)

<p align="center">
<img width="10%" src="https://raw.githubusercontent.com/wiki/mmig/mmir/images/logo.png">
</p>

Demo project for the [mmir][1] framework in combination with [Apache Cordova][9]
with platform `android`.

This project uses [mmir-lib][2] version 5.x.x, and [jQuery Mobile][12] as a GUI library:
although `jQuery Mobile` is somewhat dated, this projects demonstrates, how to use
`mmir-lib` in a project that does not utilize any additional build-tools
like `webpack`, `browserify` or similar.

# Demo

Try the [demo page][6]:
 * speech input will only work in Chrome  
   _(`mmir` provides speech plugins for other browser, see the [mmir wiki][1] for more details)_
 * for speech input, permission to use the browser's microphone needs to be granted

# Further Reading

See the [mmir page][1] for more details, guides, API documentation etc.

## Custom Build Configuration

Extended build configuration settings for `mmir-lib` can be specified via file
`mmir.build.config.js` which is automatically read by `mmir-tooling/utils/cordova-build-tool.js`
if it exists (see step 3 in section [Create Manually](#create-manually)).

The example file `mmir.build.config.js` contains an empty configuration (i.e.
default build configuration will be used), and in addition an alternative
configuration that specifies a different _state model_ for the `DialogManager`
which will use animated transitions when changing views.

To enable the "animated transitions" state model, export the variable
`stateModelWithViewTransitions` instead of `defaultConfig` in `mmir.build.config.js`.

For more options and setting see [mmir-tooling][3].

## Create Manually

1. create a new `cordova` project, for details see [cordova documentation][10]:  
   ```bash
   cordova create ...
   ```

2. setup `cordova` and `mmir`
   ```bash
   # setup cordova and cordova-plugins
   cordova platform add android
   cordova plugin add cordova-plugin-vibration
   cordova plugin add cordova-plugin-network-information
   # custom version of cordova-plugin-media that provides media-ready event (for asnyc audio loading)
   cordova plugin add git+https://github.com/mmig/cordova-plugin-media.git#CB-6880-mediaready-state-impl

   # setup mmir
   npm install --save git+https://github.com/mmig/mmir-lib.git
   npm install --save-dev git+https://github.com/mmig/mmir-tooling.git

   # install mmir-lib files into www/mmirf
   # as npm script -> see "scripts" in package.json
   npm run install-mmir-lib
   # or as bin-script (Windows)
   node_modules\.bin\mmirinstall www/mmirf --force

   # install mmir-plugins
   cordova plugin add git+https://github.com/mmig/mmir-plugin-speech-android.git#mmir-v5
   ```

3. integration [`mmir-tooling`][3] into `cordova` build process:  
   add entry to `config.xml`
   ```xml
   <hook type="before_prepare" src="node_modules/mmir-tooling/utils/cordova-build-tool.js" />
   ```

4. copy assets from this project's `www/` directory into the `www/` directory
   of the newly created `cordova` project

5. run `mmir-tooling` via `cordova`
   ```bash
   # run mmir-tooling via cordova
   cordova prepare
   # ... or run mmir-tooling and build cordova
   cordova build android
   # ... or run mmir-tooling and build cordova and run platform
   cordova run android
   ```

----

#### License
If not stated otherwise, the code, resource files etc. are provided under the MIT license (see license file).

[0]: https://github.com/mmig/mmir-starter-kit
[1]: https://github.com/mmig/mmir
[2]: https://github.com/mmig/mmir-lib
[3]: https://github.com/mmig/mmir-tooling
[4]: https://github.com/mmig/mmir-plugin-scionqueue
[5]: https://github.com/mmig/mmir-plugin-speech-nuance
[6]: https://mmig.github.io/mmir-starter-kit/www
[7]: https://mmig.github.io/mmir-starter-kit/www/testSemanticInterpreter.html
[8]: https://github.com/mmig/mmir-starter-kit/tree/new-grammar-editor/www/appTestSemantic
[9]: https://cordova.apache.org/
[10]: https://cordova.apache.org/docs/en/latest
[11]: https://cordova.apache.org/docs/en/latest/guide/platforms/android/
[12]: https://jquerymobile.com/
