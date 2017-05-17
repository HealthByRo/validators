'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var regexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

var zipcodeUSA = exports.zipcodeUSA = function zipcodeUSA(value) {
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode.';
  }

  return undefined;
};