'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipcodeUSA = exports.ZIPCODE_USA_REGEXP = undefined;

var _constants = require('./constants');

var _matchRegexp = require('./matchRegexp');

var _matchRegexp2 = _interopRequireDefault(_matchRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZIPCODE_USA_REGEXP = exports.ZIPCODE_USA_REGEXP = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

var zipcodeUSA = exports.zipcodeUSA = (0, _matchRegexp2.default)(ZIPCODE_USA_REGEXP, _constants.ZIPCODE_USA_ERROR_MSG);

exports.default = zipcodeUSA;