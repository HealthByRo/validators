import { fieldsMatch } from './fieldsMatch';

export const matchToPassword = fieldsMatch('password', 'Passwords must match');

export default matchToPassword;
