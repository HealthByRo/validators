'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oldPasswordRequired = undefined;

var _requiredIf = require('./requiredIf');

var oldPasswordRequired = exports.oldPasswordRequired = (0, _requiredIf.requiredIf)('newPassword', 'Old password is required if providing a new one');