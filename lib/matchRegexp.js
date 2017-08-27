"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var matchRegexp = exports.matchRegexp = function matchRegexp(regexp, errorMsg) {
  return function (value) {
    if (value && !regexp.test(value)) {
      return errorMsg;
    }

    return undefined;
  };
};

exports.default = matchRegexp;