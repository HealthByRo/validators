'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var zipcodeAustralian = exports.zipcodeAustralian = function zipcodeAustralian(value) {
  var regexp = /^\d{4}$/;
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode. Should be in "xxxx" format, numbers only.';
  }

  return undefined;
};