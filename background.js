chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#46a5e5' }, function() {
    console.log('The color is Blue');
  });
});
