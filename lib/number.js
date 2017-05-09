'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var number = exports.number = function number(value) {
  if (value && isNaN(Number(value))) {
    return 'Must be a number';
  }

  return undefined;
};