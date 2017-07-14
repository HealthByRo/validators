'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var passwordFormat = exports.passwordFormat = function passwordFormat(value) {
  if (value && !/^(?=.*[a-z])(?=.*\d).+$/.test(value)) {
    return 'Password format invalid (must include at least one lowercase letter and number)';
  }

  return undefined;
};

exports.default = passwordFormat;