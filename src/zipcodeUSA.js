import { ZIPCODE_USA_ERROR_MSG } from './constants';
import matchRegexp from './matchRegexp';

export const ZIPCODE_USA_REGEXP = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const zipcodeUSA = matchRegexp(ZIPCODE_USA_REGEXP, ZIPCODE_USA_ERROR_MSG);

export default zipcodeUSA;
