import passwordFormat from './passwordFormat';

describe('passwordFormat', () => {
  const errorMessage = 'Password format invalid (must include at least one lowercase letter and number)';

  it('should be defined', () => {
    expect(passwordFormat).toBeDefined();
  });

  it('should return error message when password has only letters', () => {
    expect(passwordFormat('ABCdef')).toEqual(errorMessage);
  });

  it('should return error message when password has only lowercase letters', () => {
    expect(passwordFormat('abcdef')).toEqual(errorMessage);
  });

  it('should return error message when password has only uppercase letters', () => {
    expect(passwordFormat('ABCDEF')).toEqual(errorMessage);
  });

  it('should return error message when password has only numbers', () => {
    expect(passwordFormat('12345')).toEqual(errorMessage);
  });

  it('should return error message when password has numbers and only uppercase leters', () => {
    expect(passwordFormat('ABCD12345')).toEqual(errorMessage);
  });

  it('should not return error when password has numbers and only lowercase leters', () => {
    expect(passwordFormat('abcd12345')).toBeUndefined();
  });

  it('should not return error when password has numbers and uppercase leters and one lowercase letter', () => {
    expect(passwordFormat('ABCd12345')).toBeUndefined();
  });
});
