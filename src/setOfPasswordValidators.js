import { required } from './required';
import { passwordMinLength } from './passwordMinLength';
import { passwordFormat } from './passwordFormat';

export const setOfPasswordValidators = [
  required,
  passwordMinLength,
  passwordFormat,
];
