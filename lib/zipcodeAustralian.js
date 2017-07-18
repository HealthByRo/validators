'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var regexp = /^\d{4}$/;

var zipcodeAustralian = exports.zipcodeAustralian = function zipcodeAustralian(value) {
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode. Should be in "xxxx" format, numbers only.';
  }

  return undefined;
};

exports.default = zipcodeAustralian;