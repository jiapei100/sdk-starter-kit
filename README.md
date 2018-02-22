# sdk-starter-kit

[SDK Reference](https://matterport.github.io/showcase-sdk/docs/)

#### 1. Get the latest version

```shell
$ git clone git@github.com:matterport/sdk-starter-kit.git MyApp
$ cd MyApp
```

#### 2. Install dependencies

```shell
$ npm install
```
#### 3. Configure your application settings
Open [config.json](./config.json) in your favorite text editor and replace the following strings:

`REPLACE_WITH_YOUR_MODEL_SID` and `REPLACE_WITH_YOUR_API_KEY`

You can obtain your model sid from a Matterport url, ie
https://showcase-next.matterport.com/showcase-beta?m=SxQL3iGyoDo

#### 4. Run debug web server
Depending on your system, you might not need to run npm as sudo.

```shell
sudo npm run debug
Password:*****

> sdk-starter-kit@1.0.0 debug /Users/guillermo/Documents/sdk-starter-kit copy
> webpack-dev-server

Project is running at http://localhost:80/
webpack output is served from /
Hash: 2a5d5b76f4f06063aac3
Version: webpack 3.11.0
Time: 638ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  839 kB       0  [emitted]  [big]  main
   [2] multi (webpack)-dev-server/client?http://localhost:80 ./src/index.js 40 bytes {0} [built]
   [3] (webpack)-dev-server/client?http://localhost:80 7.91 kB {0} [built]
   [4] ./node_modules/url/url.js 23.3 kB {0} [built]
   [8] ./node_modules/querystring-es3/index.js 127 bytes {0} [built]
  [11] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
  [13] ./node_modules/loglevel/lib/loglevel.js 7.86 kB {0} [built]
  [14] (webpack)-dev-server/client/socket.js 1.08 kB {0} [built]
  [15] ./node_modules/sockjs-client/dist/sockjs.js 181 kB {0} [built]
  [16] (webpack)-dev-server/client/overlay.js 3.67 kB {0} [built]
  [17] ./node_modules/ansi-html/index.js 4.26 kB {0} [built]
  [18] ./node_modules/html-entities/index.js 231 bytes {0} [built]
  [21] (webpack)/hot nonrecursive ^\.\/log$ 170 bytes {0} [built]
  [23] (webpack)/hot/emitter.js 77 bytes {0} [built]
  [25] ./src/index.js 523 bytes {0} [built]
  [26] ./config.json 91 bytes {0} [built]
    + 12 hidden modules
webpack: Compiled successfully.

```

#### 4. Start developing your application.
Your application can begin using the Matterport SDK after a successful connection.
See [src/index.js](src/index.js) line 11

```
const showcase = window.SHOWCASE_SDK.connect(showcaseFrame, Config.ApiKey, '3.0')
  .then(function(sdk) {
    console.log('SDK Connected!');

    // Your Matterport SDK application starts here.
    sdk.Model.getData().then(function(modelData){
      console.log('Model data loaded for sid:', modelData.sid);
    });
  })
```
