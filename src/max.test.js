import max from './max';

describe('max', () => {
  const maxValueValidator = max(10);

  it('should be defined', () => {
    expect(maxValueValidator).toBeDefined();
  });

  describe('should be a function', () => {
    expect(typeof maxValueValidator === 'function').toBeTruthy();
  });

  it('should return error message when value is greater than 10 characters', () => {
    expect(maxValueValidator('12')).toEqual('Value must be less than or equal to 10');
  });

  it('should return error message when value is greater than 10 characters', () => {
    expect(maxValueValidator(12)).toEqual('Value must be less than or equal to 10');
  });

  it('should not return error when value is 10', () => {
    expect(maxValueValidator('10')).toBeUndefined();
  });

  it('should not return error when value is 10', () => {
    expect(maxValueValidator(10)).toBeUndefined();
  });

  it('should not return error when value is less than 10', () => {
    expect(maxValueValidator('9')).toBeUndefined();
  });

  it('should not return error when value is less than 10', () => {
    expect(maxValueValidator(9)).toBeUndefined();
  });

  it('should not return error when value is -1', () => {
    expect(maxValueValidator('-1')).toBeUndefined();
  });

  it('should not return error when value is -1', () => {
    expect(maxValueValidator(-1)).toBeUndefined();
  });
});

