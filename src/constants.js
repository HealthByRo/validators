export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const EMAIL_ERROR_MSG = 'Email format invalid';

export const PASSWORD_FORMAT_REGEXP = /^(?=.*[a-z])(?=.*\d).+$/;
export const PASSWORD_FORMAT_ERROR_MSG = 'Password format invalid (must include at least one lowercase letter and number)';

export const ZIPCODE_USA_REGEXP = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
export const ZIPCODE_USA_ERROR_MSG = 'Invalid zipcode.';

export const ZIPCODE_AUSTRALIAN_REGEXP = /^\d{4}$/;
export const ZIPCODE_AUSTRALIAN_ERROR_MSG = 'Invalid zipcode. Should be in "xxxx" format, numbers only.';
