let changeColor = document.getElementById('changeColor');

// ---- Part1 ----
// Grab the pre-defined css color of our button
// This code grabs the button from popup.html and requests the color value from storage. It then applies THAT color as the background of the button.
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// ---- Part2 ----
// On Button Click --> trigger a programatically injected content script:
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Execute Script
    // This turns the background color of the page the same color as the button
    chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.backgroundColor = "' + color + '";' });
  });
};
