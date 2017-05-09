'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var passwordFormat = exports.passwordFormat = function passwordFormat(value) {
  if (value && !/^(?=.*[a-z])(?=.*\d).+$/i.test(value)) {
    return 'Password format invalid (must include at least one letter and at least one character)';
  }

  return undefined;
};