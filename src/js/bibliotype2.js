/*
0. Setup setRootVar function
1. Capture elements that we want to use
2. Create event handlers and define what they do
*/

/**
 * @name setRootVar
 *
 * @param {string} name
 * @param {number} value
 */
function setRootVar(name, value) {
  // let rootStyles = document.styleSheets[0].cssRules[3].style;
  let rootStyles = document.documentElement.style;
  rootStyles.setProperty(`--${name}`, `${value}`);
};

// Size
// bed is how we read with the book closest to us
// knee is middle distance, like when we put the book on a table
// breakfast is when we put it at a distance
// const bed = document.querySelector('#menu #bed');
// const knee = document.querySelector('#menu #knee');
// const breakfast = document.querySelector('#menu #breakfast');

// // Justification
// // Ragged align-left
// // Justified self explainatory
// const ragged = document.querySelector('#menu #ragged');
// const justified = document.querySelector('#menu #justified');

// Font
// Roboto is the sans serif font
// Source Serif is the serif font
const roboto = document.querySelector('#roboto');
const source = document.querySelector('#source');

const menuTitle = document.querySelector('#menuTitle');
const menu = document.querySelector('#menu');

menuTitle.onclick = function(e) {
  if (menu.style.visibilty === 'visible') {
    setRootVar('main-visibility', 'hidden');
  } else {
    setRootVar('main-visibility', 'visible');
  }
};

// --body-font: Roboto;
// --body-backup: "Open Sans";
// --body-default: sans-serif;
roboto.onclick = function() {
  setRootVar('main-body-font', 'Roboto');
  setRootVar('main-body-backup', 'Open Sans');
  setRootVar('main-body-default', 'sans-serif');
};

// --body-font: "Source Serif";
// --body-backup: "Georgia";
// --body-default: serif;
source.onclick = function() {
  setRootVar('main-body-font', 'Source Serif');
  setRootVar('main-body-backup', 'Georgia');
  setRootVar('main-body-default', 'serif');
};
