import {
  ZIPCODE_AUSTRALIAN_REGEXP,
  ZIPCODE_AUSTRALIAN_ERROR_MSG,
} from './contants';
import matchRegexp from './matchRegexp';

export const zipcodeAustralian = matchRegexp(ZIPCODE_AUSTRALIAN_REGEXP, ZIPCODE_AUSTRALIAN_ERROR_MSG);

export default zipcodeAustralian;
