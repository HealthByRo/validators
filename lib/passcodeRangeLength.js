'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passcodeRangeLength = undefined;

var _rangeLength = require('./rangeLength');

var passcodeRangeLength = exports.passcodeRangeLength = (0, _rangeLength.rangeLength)(0, 1, 'PIN');

exports.default = passcodeRangeLength;