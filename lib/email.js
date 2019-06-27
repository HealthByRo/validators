'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = exports.EMAIL_REGEXP = exports.matchRegexp = undefined;

var _constants = require('./constants');

var matchRegexp = exports.matchRegexp = function matchRegexp(regexp, errorMsg) {
  return function (value) {
    var email = value.trim();

    if (email && !regexp.test(email)) {
      return errorMsg;
    }

    return undefined;
  };
};

var EMAIL_REGEXP = exports.EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

var email = exports.email = matchRegexp(EMAIL_REGEXP, _constants.EMAIL_ERROR_MSG);

exports.default = email;