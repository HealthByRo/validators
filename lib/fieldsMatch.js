'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fieldsMatch = exports.fieldsMatch = function fieldsMatch(otherFieldName, errorText) {
  return function (value, values) {
    var newValues = void 0;

    if (typeof values.toJS === 'function') {
      newValues = values.toJS();
    } else {
      newValues = values;
    }

    if (newValues[otherFieldName]) {
      if (value === newValues[otherFieldName]) {
        return undefined;
      }

      return errorText;
    }

    return undefined;
  };
};