import matchToNewPassword from './matchToNewPassword';

describe('matchToNewPassword', () => {
  const errorMessage = 'Passwords must match';

  it('should be defined', () => {
    expect(matchToNewPassword).toBeDefined();
  });

  it('should return error message when new password in the values does not match', () => {
    expect(matchToNewPassword('abcd1234', { newPassword: 'abcd1234a' })).toEqual(errorMessage);
  });

  it('should not return error when new passwords match', () => {
    expect(matchToNewPassword('abcd1234', { newPassword: 'abcd1234' })).toBeUndefined();
  });

  it('should not return error message when new password in the values does not exist', () => {
    expect(matchToNewPassword('abcd1234', {})).toBeUndefined();
  });
});
