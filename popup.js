document.addEventListener('DOMContentLoaded', function () {
  let submitButton = document.getElementById('button_submit');
  submitButton.addEventListener('click', sendData);
  });
function sendData() {
  let params = {
  active: true,
  currentWindow: true
  }
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs) {
    let profile = document.getElementById("profileText").value;
    let username = document.getElementById("username").value;
    let message = {
      txt: "Hello",
      username: username,
      profile: profile
    }
    console.log(message);
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      console.log("Success");
    });
  }
}