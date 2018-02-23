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
Depending on your system, you might not need to run npm as sudo. Note: Some Cygwin setups may create orphaned Node.exe processes when terminating webpack-dev-server.

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

```javascript
window.SHOWCASE_SDK.connect(showcaseFrame, Config.ApiKey, '3.0')
  .then(function(sdk) {
    console.log('SDK Connected!');

    // Your Matterport SDK application starts here.
    sdk.Model.getData().then(function(modelData){
      console.log('Model data loaded for sid:', modelData.sid);
    });
  })
```

#### 5. Customize the viewer
You can customize the viewer by setting url parameters on the iframe link,

For example, 
```javascript
const showcaseFrame = document.getElementById('showcase');
showcaseFrame.src = 'https://my.matterport.com/showcase-beta?m=' + Config.Sid + '&play=1&brand=0&qs=1';
```
These options set:
<table>
    <tr><td>Option</td><td>Description</td></tr>
    <tr><td>play=1</td><td>Automatically opens the Matterport Space when the iframe loads on the page</td></tr>
    <tr><td>brand=0</td><td>Hide 'Presented By' details when Space opens.</td></tr>
    <tr><td>qs=1</td><td>Enable Quickstart (when the Matterport Space first opens, go straight into Inside View).</td></tr>
</table>

[URL Parameter Link](https://support.matterport.com/hc/en-us/articles/209980967-URL-Parameters)
