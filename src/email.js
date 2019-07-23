import { EMAIL_ERROR_MSG } from './constants';
import matchRegexp from './matchRegexp';

export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const email = (value) => matchRegexp(EMAIL_REGEXP, EMAIL_ERROR_MSG)(value ? value.trim() : undefined);

export default email;
