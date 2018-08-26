module.exports = {
  'globDirectory': '.',
  'globPatterns': [
    '**/*.{css,html,js}',
  ],
  'globIgnores': [
    '**/node_modules/**/*',
    '**/sw.js',
    'workbox-config.js',
  ],
  'swDest': 'sw.js',
  'swSrc': 'js/sw.js',
};
