document.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.getElementById('button_submit');
  submitButton.addEventListener('click', sendData);
  });
function sendData() {
  let params = {
  active: true,
  currentWindow: true
  }
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs) {
    let profile = document.getElementById("profileText");
    let username = document.getElementById("username");
    let message = {
      txt: "Hello",
      username,
      profile
    }
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      console.log("Success");
    });
  }
}