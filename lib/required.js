'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var required = exports.required = function required(value) {
  if (!value) {
    return 'Field required';
  }

  return undefined;
};