import fieldsMatch from './fieldsMatch';

describe('fieldsMatch', () => {
  const matchToPassword = fieldsMatch('password', 'Passwords must match!!!');
  const errorMessage = 'Passwords must match!!!';

  describe('should be a function', () => {
    expect(typeof matchToPassword === 'function').toBeTruthy();
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
