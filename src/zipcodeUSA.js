import {
  ZIPCODE_USA_REGEXP,
  ZIPCODE_USA_ERROR_MSG,
} from './constants';
import matchRegexp from './matchRegexp';

export const zipcodeUSA = matchRegexp(ZIPCODE_USA_REGEXP, ZIPCODE_USA_ERROR_MSG);

export default zipcodeUSA;
