"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rangeLength = exports.rangeLength = function rangeLength(min, max, label) {
  return function (value) {
    if (value && (min > value.length || value.length > max)) {
      return label ? label + " must be between " + min + " and " + max + " characters" : "Must be between " + min + " and " + max + " characters";
    }

    return undefined;
  };
};

exports.default = rangeLength;