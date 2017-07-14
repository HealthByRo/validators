'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOfPasswordValidators = undefined;

var _required = require('./required');

var _required2 = _interopRequireDefault(_required);

var _passwordMinLength = require('./passwordMinLength');

var _passwordMinLength2 = _interopRequireDefault(_passwordMinLength);

var _passwordFormat = require('./passwordFormat');

var _passwordFormat2 = _interopRequireDefault(_passwordFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setOfPasswordValidators = exports.setOfPasswordValidators = [_required2.default, _passwordMinLength2.default, _passwordFormat2.default];

exports.default = setOfPasswordValidators;