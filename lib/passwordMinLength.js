'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordMinLength = undefined;

var _minLength = require('./minLength');

var passwordMinLength = exports.passwordMinLength = (0, _minLength.minLength)(8, 'Password');

exports.default = passwordMinLength;