'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = exports.EMAIL_REGEXP = undefined;

var _constants = require('./constants');

var _matchRegexp = require('./matchRegexp');

var _matchRegexp2 = _interopRequireDefault(_matchRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEXP = exports.EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

var email = exports.email = (0, _matchRegexp2.default)(EMAIL_REGEXP, _constants.EMAIL_ERROR_MSG);

exports.default = email;