[mmir-starter-kit][0]
===========

![GitHub](https://img.shields.io/github/license/mmig/mmir-starter-kit)

<p align="center">
<img width="10%" src="https://raw.githubusercontent.com/wiki/mmig/mmir/images/logo.png">
</p>

Demo project for the [mmir][1] framework.

### Create Manually

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
npm run install-mmir-lib

```

add entry to `config.xml`
```xml
<hook type="before_prepare" src="node_modules/mmir-tooling/utils/cordova-build-tool.js" />
```

```bash
cordova prepare
```

----

#### License
If not stated otherwise, the code, resource files etc. is provided under the MIT license (see license file).

[0]: https://github.com/mmig/mmir-starter-kit
[1]: https://github.com/mmig/mmir
[2]: https://github.com/mmig/mmir-lib
[3]: https://github.com/mmig/mmir-tooling
[4]: https://github.com/mmig/mmir-plugin-scionqueue
[5]: https://github.com/mmig/mmir-plugin-speech-nuance
[6]: http://mmig.github.io/mmir-starter-kit/www
[7]: http://mmig.github.io/mmir-starter-kit/www/testSemanticInterpreter.html
[8]: https://github.com/mmig/mmir-starter-kit/tree/new-grammar-editor/www/appTestSemantic
[9]: http://cordova.apache.org/
[10]: https://cordova.apache.org/docs/en/latest/guide/platforms/android/
