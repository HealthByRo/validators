import minLength from './minLength';

describe('minLength', () => {
  const minLengthValidator = minLength(10, 'My field');

  it('should be defined', () => {
    expect(minLength).toEqual(minLength);
  });

  describe('should be a function', () => {
    expect(typeof minLengthValidator === 'function').toBeTruthy();
  });

  it('should return error message when text has less than 10 characters', () => {
    expect(minLengthValidator('012345678')).toEqual('My field must be 10 characters or more');
  });

  it('should not return error when text has 10 characters', () => {
    expect(minLengthValidator('0123456789')).toBeUndefined();
  });

  it('should not return error when text has more then 10 characters', () => {
    expect(minLengthValidator('01234567891')).toBeUndefined();
  });
});

describe('minLength without field name', () => {
  const minLengthValidator = minLength(5);

  it('should return error message when text has less than 5 characters', () => {
    expect(minLengthValidator('0123')).toEqual('Must be 5 characters or more');
  });

  it('should not return error when text has 5 characters', () => {
    expect(minLengthValidator('012345678')).toBeUndefined();
  });
});
