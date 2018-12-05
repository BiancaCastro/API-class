const appName = require('../package.json').name;
const debugmod = require('debug');
const path = require('path');

const prefix = `${appName}:${path.basename(module.parent.filename).split('.')[0]}`;
const levels = {
  debug: debugmod(`debug:${prefix}`),
  info: debugmod(`info:${prefix}`),
  error: debugmod(`error:${prefix}`),
};

delete require.cache[require.resolve(__filename)];

module.exports = levels;
