'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = exports.required = function required(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  if (!value && type !== 'number') {
    return 'Field required';
  }

  return undefined;
};

exports.default = required;