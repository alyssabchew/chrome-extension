chrome.browserAction.onClicked.addListener(setup);
function setup() {
  // noCanvas();
  // let username = select('#username');
  // let profile = select('#profileText');
  // username.input(sendText);
  // profile.input(sendText);
  // function sendText() {
  // //Value got from input field in popup
  // let msg = {
  //   username: username.value(),
  //   profile: profile.value()
  // }
  // //Sending message to content
  // chrome.tabs.query({active: true,currentWindow:true},function(tabs){
  // chrome.tabs.sendMessage(tabs[0].id, msg);
  // });
  // }
  chrome.tabs.executeScript(null, { file: 'main.js' })
}