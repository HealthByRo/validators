"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requiredIf = exports.requiredIf = function requiredIf(otherFieldName, errorText) {
  return function (value, values) {
    if (values[otherFieldName]) {
      return errorText;
    }

    return undefined;
  };
};