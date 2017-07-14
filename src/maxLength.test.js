import maxLength from './maxLength';

describe('maxLength', () => {
  const maxLengthValidator = maxLength(10, 'My field');

  it('should be defined', () => {
    expect(maxLength).toBeDefined();
  });

  describe('should be a function', () => {
    expect(typeof maxLengthValidator === 'function').toBeTruthy();
  });

  it('should return error message when text length is greater than 10 characters', () => {
    expect(maxLengthValidator('01234567891')).toEqual('My field must be 10 characters or less');
  });

  it('should not return error when text has 10 characters', () => {
    expect(maxLengthValidator('0123456789')).toBeUndefined();
  });

  it('should not return error when text has less then 10 characters', () => {
    expect(maxLengthValidator('0123456789')).toBeUndefined();
  });
});

describe('maxLength without field name', () => {
  const maxLengthValidator = maxLength(5);

  it('should return error message when text length is greater than 5 characters', () => {
    expect(maxLengthValidator('01234567891')).toEqual('Must be 5 characters or less');
  });

  it('should not return error when text has less then 5 characters', () => {
    expect(maxLengthValidator('01234')).toBeUndefined();
  });
});
