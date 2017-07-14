import matchToPassword from './matchToPassword';

describe('matchToPassword', () => {
  const errorMessage = 'Passwords must match';

  it('should be defined', () => {
    expect(matchToPassword).toBeDefined();
  });

  it('should return error message when password in the values does not match', () => {
    expect(matchToPassword('abcd1234', { password: 'abcd1234a' })).toEqual(errorMessage);
  });

  it('should not return error when passwords match', () => {
    expect(matchToPassword('abcd1234', { password: 'abcd1234' })).toBeUndefined();
  });

  it('should not return error message when password in the values does not exist', () => {
    expect(matchToPassword('abcd1234', {})).toBeUndefined();
  });
});
