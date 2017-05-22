import { requiredIf } from './requiredIf';

export const oldPasswordRequired = requiredIf('newPassword', 'Old password is required if providing a new one');
