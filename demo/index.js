require('tingle-context');

if (window.FastClick) {
  window.FastClick.attach(document.body);
}

module.exports = require('./demo');
