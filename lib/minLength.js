"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var minLength = exports.minLength = function minLength(min, label) {
  return function (value) {
    if (value && value.length < min) {
      return label ? label + " must be " + min + " characters or more" : "Must be " + min + " characters or more";
    }

    return undefined;
  };
};