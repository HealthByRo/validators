'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requiredIf = exports.requiredIf = function requiredIf(otherFieldName, errorText) {
  return function (value, values) {
    var newValues = void 0;

    if (typeof values.toJS === 'function') {
      newValues = values.toJS();
    } else {
      newValues = values;
    }

    if (newValues[otherFieldName] && !value) {
      return errorText;
    }

    return undefined;
  };
};