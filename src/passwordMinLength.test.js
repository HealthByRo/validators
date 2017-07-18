import passwordMinLength from './passwordMinLength';

describe('cvcRangeLength', () => {
  it('should be defined', () => {
    expect(passwordMinLength).toBeDefined();
  });

  it('should return error message when password has less than 8 characters', () => {
    expect(passwordMinLength('0123456')).toEqual('Password must be 8 characters or more');
  });

  it('should not return error when text has 8 characters', () => {
    expect(passwordMinLength('01234567')).toBeUndefined();
  });

  it('should not return error when text has more then 8 characters', () => {
    expect(passwordMinLength('012345678')).toBeUndefined();
  });

  it('should not return error when text is not filled', () => {
    expect(passwordMinLength('')).toBeUndefined();
  });
});
