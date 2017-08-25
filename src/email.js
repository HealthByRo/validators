import { EMAIL_ERROR_MSG } from './constants';
import matchRegexp from './matchRegexp';

export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const email = matchRegexp(EMAIL_REGEXP, EMAIL_ERROR_MSG);

export default email;
