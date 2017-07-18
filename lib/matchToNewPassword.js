'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchToNewPassword = undefined;

var _fieldsMatch = require('./fieldsMatch');

var matchToNewPassword = exports.matchToNewPassword = (0, _fieldsMatch.fieldsMatch)('newPassword', 'Passwords must match');

exports.default = matchToNewPassword;