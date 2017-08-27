'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipcodeAustralian = exports.ZIPCODE_AUSTRALIAN_REGEXP = undefined;

var _constants = require('./constants');

var _matchRegexp = require('./matchRegexp');

var _matchRegexp2 = _interopRequireDefault(_matchRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZIPCODE_AUSTRALIAN_REGEXP = exports.ZIPCODE_AUSTRALIAN_REGEXP = /^\d{4}$/;

var zipcodeAustralian = exports.zipcodeAustralian = (0, _matchRegexp2.default)(ZIPCODE_AUSTRALIAN_REGEXP, _constants.ZIPCODE_AUSTRALIAN_ERROR_MSG);

exports.default = zipcodeAustralian;