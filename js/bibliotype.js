/*
TODO: Create function that checks if k/v pair exists in local storage
TODO: Check for localstorage value and set it if not present
TODO: Implement Toggle for menuButton
TODO: define width and font size for reading experiences
TODO: Use defined values in event listeners for size
*/
/**
 * @name setRootVar
 *
 * @param {String} name
 * @param {any} value
 */
function setRootVar(name, value) {
  let rootStyles = document.styleSheets[0].cssRules[3].style;
  rootStyles.setProperty('--' + name, value);
};

// /**
//  * @name checkLS
//  *
//  * @param {string} value to check for
//  * @return {boolean}
//  */
// function checkLS(value) {
//   return localStorage.getItem(value);
// }

  document.addEventListener('DOMContentLoaded', function(e) {
    // Show or hide the menu.  Right Now it only shows
    const menuButton = document.getElementById('menuButton');
      menuButton.addEventListener('click', function(e) {
      setRootVar('menu-visibility', 'show');
    }, false);

    // Set the font to Roboto
    const roboto = document.getElementById('roboto');
    roboto.addEventListener('click', function(e) {
      setRootVar('body-font', 'roboto');
      setRootVar('body-backup', 'Open Sans');
      setRootVar('body-default', 'sans-serif');
    });

    // Set the font to Source Serif
    const source = document.getElementById('source');
    source.addEventListener('click', function(e) {
      setRootVar('body-font', 'Source Serif');
      setRootVar('body-backup', 'Georgia');
      setRootVar('body-default', 'serif');
    });

    // Justify text
    const justify = document.getElementById('justify');
    justify.addEventListener('click', function(e) {
      setRootVar('content-justify', 'justify');
    });

    // Align text to the left, creating ragged right margin
    const ragged = document.getElementById('ragged');
    ragged.addEventListener('click', function(e) {
      setRootVar('content-justify', 'left');
    });

    // Hyphenate
    const hyphenate = document.getElementById('hyphenate');
    hyphenate.addEventListener('click', function(e) {
      setRootVar('content-hyphenate', 'auto');
    });

    // Manual Hyphens are how I'm turning them off
    const manual = document.getElementById('manual');
    manual.addEventListener('click', function() {
      setRootVar('content-hyphenate', 'manual');
    });

    // High contrast color set.
    // When we change, we change both background and color text
    const light = document.getElementById('light');
    light.addEventListener('click', function(e) {
      setRootVar('background-color', 'rgba(255, 255, 255, 1)');
      setRootVar('text-color', 'rgba(0, 0, 0, 1)');
    });

    const dark = document.getElementById('dark');
    dark.addEventListener('click', function(e) {
      setRootVar('background-color', 'rgba(0, 0, 0, 1)');
      setRootVar('text-color', 'rgba(255, 255, 255, 1)');
    });

    const bed = document.getElementById('bed');
    bed.addEventListener('click', function() {
      setRootVar('body-width', '60rem');
      setRootVar('menu-visibility', 'hidden');
    });
    const knee = document.getElementById('knee');
    knee.addEventListener('click', function() {
      setRootVar('body-width', '50rem');
      setRootVar('menu-visibility', 'hidden');
    });
    const breakfast = document.getElementById('breakfast');
    breakfast.addEventListener('click', function() {
      setRootVar('body-width', '40rem');
      setRootVar('menu-visibility', 'hidden');
    });

    // Set default value
    // Compare the current value with the default
    // Adjust as needed
    const larger = document.getElementById('larger');
    const smaller = document.getElementById('smaller');
    const defaultSize = document.getElementById('defaultSize');


    larger.addEventListener('click', function(e) {
    const style = window.getComputedStyle(document.documentElement);
    const fontSize = style.getPropertyValue('--body-font-size');
    const calcFont = parseFloat(fontSize);
    // console.log(fontSize);
    // console.log(calcFont);
      setRootVar('body-font-size', calcFont + 0.25);
    // console.log(fontSize);
    });

    smaller.addEventListener('click', function(e) {
    const style = window.getComputedStyle(document.documentElement);
    const fontSize = style.getPropertyValue('--body-font-size');
    const calcFont = parseFloat(fontSize);
      setRootVar('body-font-size', calcFont - 0.1);
    });

    defaultSize.addEventListener('click', function(e) {
      setRootVar('body-font-size', 1.25);
    });
 });
