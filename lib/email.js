'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var regexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

var email = exports.email = function email(value) {
  if (value && !regexp.test(value)) {
    return 'Email format invalid';
  }

  return undefined;
};
