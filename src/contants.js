export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const EMAIL_ERROR_MSG = 'Email format invalid';

export const PASSWORD_FORMAT_REGEXP = /^(?=.*[a-z])(?=.*\d).+$/;
export const PASSWORD_FORMAT_ERROR_MSG = 'Password format invalid (must include at least one lowercase letter and number)';
