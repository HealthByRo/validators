"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fieldsMatch = exports.fieldsMatch = function fieldsMatch(otherFieldName, errorText) {
  return function (value, values) {
    if (values[otherFieldName]) {
      if (value === values[otherFieldName]) {
        return undefined;
      }

      return errorText;
    }

    return undefined;
  };
};