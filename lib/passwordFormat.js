'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordFormat = exports.PASSWORD_FORMAT_REGEXP = undefined;

var _constants = require('./constants');

var _matchRegexp = require('./matchRegexp');

var _matchRegexp2 = _interopRequireDefault(_matchRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PASSWORD_FORMAT_REGEXP = exports.PASSWORD_FORMAT_REGEXP = /^(?=.*[a-z])(?=.*\d).+$/;

var passwordFormat = exports.passwordFormat = (0, _matchRegexp2.default)(PASSWORD_FORMAT_REGEXP, _constants.PASSWORD_FORMAT_ERROR_MSG);

exports.default = passwordFormat;