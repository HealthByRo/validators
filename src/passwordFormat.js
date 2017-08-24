import {
  PASSWORD_FORMAT_REGEXP,
  PASSWORD_FORMAT_ERROR_MSG,
} from './contants';
import matchRegexp from './matchRegexp';

export const passwordFormat = matchRegexp(PASSWORD_FORMAT_REGEXP, PASSWORD_FORMAT_ERROR_MSG);

export default passwordFormat;
