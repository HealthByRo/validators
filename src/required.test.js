import required from './required';

describe('required', () => {
  const errorMessage = 'Field required';

  it('should be defined', () => {
    expect(required).toEqual(required);
  });

  it('should not return error message when arugment is zero', () => {
    expect(required(0)).toBeUndefined();
  });

  it('should not return error message when arugment is empty array', () => {
    expect(required([])).toBeUndefined();
  });

  it('should not return error message when arugment is empty object', () => {
    expect(required({})).toBeUndefined();
  });

  it('should not return error message when arugment is boolean false', () => {
    expect(required(false)).toBeUndefined();
  });

  it('should not return error message when arugment is boolean true', () => {
    expect(required(true)).toBeUndefined();
  });

  it('should not return error message when arugment is not empty string', () => {
    expect(required('abc')).toBeUndefined();
  });

  it('should not return error message when arugment is a function', () => {
    expect(required(() => false)).toBeUndefined();
  });

  it('should return error message when value is undefined', () => {
    expect(required(undefined)).toEqual(errorMessage);
  });

  it('should return error message when value is null', () => {
    expect(required(null)).toEqual(errorMessage);
  });

  it('should not return error when value is emty string', () => {
    expect(required('')).toEqual(errorMessage);
  });
});
