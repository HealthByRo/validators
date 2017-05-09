'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOfPasswordValidators = undefined;

var _required = require('./required');

var _passwordMinLength = require('./passwordMinLength');

var _passwordFormat = require('./passwordFormat');

var setOfPasswordValidators = exports.setOfPasswordValidators = [_required.required, _passwordMinLength.passwordMinLength, _passwordFormat.passwordFormat];