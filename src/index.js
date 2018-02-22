
const Config = require('../config.json');

const showcaseFrame = document.getElementById('showcase');
showcaseFrame.src = 'https://my.matterport.com/showcase-beta?m=' + Config.Sid + '&play=1';

const showcase = window.SHOWCASE_SDK.connect(showcaseFrame, Config.ApiKey, '3.0')
  .then(function(sdk) {
    console.log('SDK Connected!');

    // Your Matterport SDK application starts here.
    sdk.Model.getData().then(function(modelData){
      console.log('Model data loaded for sid:', modelData.sid);
    });
  })
  .catch(function(error) {
    console.error(error);
  });
