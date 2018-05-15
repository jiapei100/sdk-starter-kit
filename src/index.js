
const Config = require('../config.json');

const showcaseFrame = document.getElementById('showcase');

// Matterport showcase URL parameters
// https://support.matterport.com/hc/en-us/articles/209980967-URL-Parameters
showcaseFrame.src = 'https://my.matterport.com/showcase-beta/?m=' + Config.Sid + '&play=1';

window.SHOWCASE_SDK.connect(showcaseFrame, Config.ApiKey, '3.0')
  .then(function(sdk) {
    console.log('SDK Connected!');

    // Your Matterport SDK application starts here.
    sdk.on(sdk.App.Event.PHASE_CHANGE, function(phase) {
      if(phase === sdk.App.Phase.PLAYING) {
        sdk.Camera.takeScreenShot({
          width: 256,
          height: 256
        }, {
          mattertags: false,
          sweeps: false
        })
        .then(function (screenshotUrl) {
          var preview = document.getElementById('screenshot-preview');
          preview.setAttribute('src', screenshotUrl);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    });
  })
  .catch(function(error) {
    console.error(error);
  });
