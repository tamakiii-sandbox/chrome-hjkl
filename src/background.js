window.console.log('src/background.js')
// window.console.log(chrome)
chrome.runtime.onInstalled.addListener(function() {
  window.console.log('onInstalled')
  // chrome.storage.sync.set({color: '#3aa757'}, function() {
  //   console.log("The color is green.");
  // });
});
