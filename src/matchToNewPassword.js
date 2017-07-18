import { fieldsMatch } from './fieldsMatch';

export const matchToNewPassword = fieldsMatch('newPassword', 'Passwords must match');

export default matchToNewPassword;
