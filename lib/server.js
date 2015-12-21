'use strict';

var common = require('./common');

function fromClient() {
  return common.sayHello('from the server');
}

module.exports.fromClient = fromClient;
