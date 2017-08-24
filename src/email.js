import {
  EMAIL_REGEXP,
  EMAIL_ERROR_MSG,
} from './contants';
import matchRegexp from './matchRegexp';

export const email = matchRegexp(EMAIL_REGEXP, EMAIL_ERROR_MSG);

export default email;
