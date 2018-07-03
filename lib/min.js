"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var min = exports.min = function min(minValue) {
  return function (value) {
    if (Number(value) <= Number(minValue)) {
      return "Value must be greater than or equal to " + minValue;
    }

    return undefined;
  };
};

exports.default = min;