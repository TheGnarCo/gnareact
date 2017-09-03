var jsdom = require('jsdom').JSDOM;
var exposedProperties = ['window', 'navigator', 'document'];

jsdom = new jsdom('<!DOCTYPE html><html><body></body></html>');

global.document = jsdom.window.document;
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

function mockStorage() {
  let storage = {};

  return {
    setItem(key, value = '') {
      storage[key] = value;
    },
    getItem(key) {
      return storage[key];
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      return Object.keys(storage)[i] || null;
    },
    clear () {
      storage = {};
    },
  };
}

global.navigator = {
  userAgent: 'node.js'
};

global.window = {
  localStorage: mockStorage(),
};
