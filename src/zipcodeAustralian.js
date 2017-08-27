import { ZIPCODE_AUSTRALIAN_ERROR_MSG } from './constants';
import matchRegexp from './matchRegexp';

export const ZIPCODE_AUSTRALIAN_REGEXP = /^\d{4}$/;

export const zipcodeAustralian = matchRegexp(ZIPCODE_AUSTRALIAN_REGEXP, ZIPCODE_AUSTRALIAN_ERROR_MSG);

export default zipcodeAustralian;
