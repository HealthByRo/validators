"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var max = exports.max = function max(maxValue) {
  return function (value) {
    if (Number(value) > Number(maxValue)) {
      return "Value must be less than or equal to " + maxValue;
    }

    return undefined;
  };
};

exports.default = max;