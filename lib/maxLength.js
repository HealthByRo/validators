"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var maxLength = exports.maxLength = function maxLength(max, label) {
  return function (value) {
    if (value && value.length > max) {
      return label ? label + " must be " + max + " characters or less" : "Must be " + max + " characters or less";
    }

    return undefined;
  };
};