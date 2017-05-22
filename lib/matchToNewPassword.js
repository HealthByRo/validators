'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchToNewPassword = undefined;

var _fieldsMatch = require('./fieldsMatch');

var matchToNewPassword = exports.matchToNewPassword = (0, _fieldsMatch.fieldsMatch)('new_password', 'Passwords must match');