/**
 * @name setRootVar
 *
 * @param {String} name
 * @param {string} value
 */
function setRootVar(name, value) {
  let rootStyles = document.styleSheets[0].cssRules[3].style;
  rootStyles.setProperty('--' + name, value);
};

/**
 * @name loadSettings
 *
 */
function loadSettings() {
  if (localStorage.getItem('menu-visibility') !== null) {
    setRootVar('menu-visibility', localStorage.getItem('menu-visibility'));
  }

  if (localStorage.getItem('body-font') !== null) {
    setRootVar('body-font', localStorage.getItem('body-font'));
    setRootVar('body-backup', localStorage.getItem('body-backup'));
    setRootVar('body-default', localStorage.getItem('body-default'));
  }

  if (localStorage.getItem('content-justify') !== null) {
    setRootVar('content-justify', localStorage.getItem('content-justify'));
  }

  if (localStorage.getItem('content-hyphenate') !== null) {
    setRootVar('content-hyphenate', localStorage.getItem('content-hyphenate'));
  }

  if (localStorage.getItem('background-color') !== null) {
    setRootVar('background-color', localStorage.getItem('background-color'));
    setRootVar('text-color', localStorage.getItem('text-color'));
  }

  if (localStorage.getItem('body-width') !== null) {
    setRootVar('body-width', localStorage.getItem('body-width'));
  }

  if (localStorage.getItem('body-font-size') !== null) {
    setRootVar('bodyFontSize', localStorage.getItem('body-font-size'));
  }
}

loadSettings();

document.addEventListener('DOMContentLoaded', function(e) {
  const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', function(e) {
    const style = window.getComputedStyle(document.documentElement);
    const menuStatus = style.getPropertyValue('--menu-visibility');
    if (menuStatus == 'hidden') {
      setRootVar('menu-visibility', 'show');
    } else {
      setRootVar('menu-visibility', 'hidden');
    }
    localStorage.setItem(
      'menu-visibility', style.getPropertyValue('--menu-visibility'));
  });

  // Set the font to Roboto
  const roboto = document.getElementById('roboto');
  roboto.addEventListener('click', function(e) {
    setRootVar('body-font', 'roboto');
    setRootVar('body-backup', 'Open Sans');
    setRootVar('body-default', 'sans-serif');
    localStorage.setItem('body-font', 'roboto');
    localStorage.setItem('body-backup', 'Open Sans');
    localStorage.setItem('body-default', 'sans-serif');
  });

  // Set the font to Source Serif
  const source = document.getElementById('source');
  source.addEventListener('click', function(e) {
    setRootVar('body-font', 'Source Serif');
    setRootVar('body-backup', 'Georgia');
    setRootVar('body-default', 'serif');
    // set localStorage values
    localStorage.setItem('body-font', 'Source Serif');
    localStorage.setItem('body-backup', 'Georgia');
    localStorage.setItem('body-default', 'serif');
  });

  // Justify text
  const justify = document.getElementById('justify');
  justify.addEventListener('click', function(e) {
    setRootVar('content-justify', 'justify');
    localStorage.setItem('content-justify', 'justify');
  });

  // Align text to the left, creating ragged right margin
  const ragged = document.getElementById('ragged');
  ragged.addEventListener('click', function(e) {
    setRootVar('content-justify', 'left');
    localStorage.setItem('content-justify', 'left');
  });

  // Hyphenate
  const hyphenate = document.getElementById('hyphenate');
  hyphenate.addEventListener('click', function(e) {
    setRootVar('content-hyphenate', 'auto');
    localStorage.setItem('content-hyphenate', 'auto');
  });

  // Manual Hyphens are how I'm turning them off
  const manual = document.getElementById('manual');
  manual.addEventListener('click', function() {
    setRootVar('content-hyphenate', 'manual');
    localStorage.setItem('content-hyphenate', 'manual');
  });

  // High contrast color set.
  // When we change, we change both background and color text
  const light = document.getElementById('light');
  light.addEventListener('click', function(e) {
    setRootVar('background-color', 'rgba(255, 255, 255, 1)');
    setRootVar('text-color', 'rgba(0, 0, 0, 1)');
    localStorage.setItem('background-color', 'rgba(255, 255, 255, 1)');
    localStorage.setItem('text-color', 'rgba(0, 0, 0, 1)');
  });

  const dark = document.getElementById('dark');
  dark.addEventListener('click', function(e) {
    setRootVar('background-color', 'rgba(0, 0, 0, 1)');
    setRootVar('text-color', 'rgba(255, 255, 255, 1)');
    localStorage.setItem('background-color', 'rgba(0, 0, 0, 1)');
    localStorage.setItem('text-color', 'rgba(255, 255, 255, 1)');
  });

  const bed = document.getElementById('bed');
  bed.addEventListener('click', function() {
    setRootVar('body-width', '60rem');
    localStorage.setItem('body-width', '60rem');
  });

  const knee = document.getElementById('knee');
  knee.addEventListener('click', function() {
    setRootVar('body-width', '50rem');
    localStorage.setItem('body-width', '50rem');
  });

  const breakfast = document.getElementById('breakfast');
  breakfast.addEventListener('click', function() {
    setRootVar('body-width', '40rem');
    localStorage.setItem('body-width', '40rem');
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
    localStorage.setItem(
        'body-font-size', style.getPropertyValue('--body-font-size'));
  });

  smaller.addEventListener('click', function(e) {
    const style = window.getComputedStyle(document.documentElement);
    const fontSize = style.getPropertyValue('body-font-size');
    const calcFont = parseFloat(fontSize);
    if (fontSize > 0.75) {
      setRootVar('body-font-size', calcFont - 0.25);
    } else {
      setRootVar('body-font-size', 0.75);
    }
    localStorage.setItem(
      'body-font-size', style.getPropertyValue('--body-font-size'));
  });

  defaultSize.addEventListener('click', function(e) {
    setRootVar('body-font-size', 1.25);
    localStorage.setItem('body-font-size', 1.25);
  });
});
