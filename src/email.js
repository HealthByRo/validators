import { EMAIL_ERROR_MSG } from './constants';

export const matchRegexp = (regexp, errorMsg) => (value) => {
  const email = value.trim();

  if (email && !regexp.test(email)) {
    return errorMsg;
  }

  return undefined;
};

export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const email = matchRegexp(EMAIL_REGEXP, EMAIL_ERROR_MSG);

export default email;
