let page = document.getElementById('buttonDiv');

/*
(1) Four color options are provided then generated as buttons on the options page with onclick event listeners.

(2) When the user clicks a button, it updates the color value in the extension's global storage.

--> Since all of the extension's files pull the color information from global storage no other values need to be updated.
*/

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#000000'];

function constructOptions(kButtonColors) {
  // ES6 "for-of" Loop
  for (let item of kButtonColors) {
    let button = document.createElement('button');

    button.style.backgroundColor = item;

    button.addEventListener('click', function() {
      chrome.storage.sync.set({ color: item }, function() {
        console.log('color is ' + item);
      });
    });

    page.appendChild(button);
  } // end "for-of" Loop
}

constructOptions(kButtonColors);
