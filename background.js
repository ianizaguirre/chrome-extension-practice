// ---- Part1 ----
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#46a5e5' }, function() {
    console.log('The color is Blue');
  });

  // ---- Part2 ----
  // It is up to the extension to tell the browser when the user can interact with popup.html.

  // --> Use declarative injection for content scripts that should be automatically run on SPECIFIED  pages.
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
