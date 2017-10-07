'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var noSpacesOnly = exports.noSpacesOnly = function noSpacesOnly(value) {
  var pattern = /\S+/g;

  if (value && !pattern.test(value)) {
    return 'Field cannot consist of spaces only';
  }

  return undefined;
};

exports.default = noSpacesOnly;