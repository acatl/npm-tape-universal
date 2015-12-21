'use strict';

var common = require('./common');

function fromClient() {
  return common.sayHello('from the browser');
}

module.exports.fromClient = fromClient;
