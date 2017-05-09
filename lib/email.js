'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var email = exports.email = function email(value) {
  if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value)) {
    return 'Email format invalid';
  }

  return undefined;
};