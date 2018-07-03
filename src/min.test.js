import min from './min';

describe('min', () => {
  const minValueValidator = min(10);

  it('should be defined', () => {
    expect(minValueValidator).toBeDefined();
  });

  describe('should be a function', () => {
    expect(typeof minValueValidator === 'function').toBeTruthy();
  });

  it('should return error message when value is less than 10 characters', () => {
    expect(minValueValidator('-1')).toEqual('Value must be greater than or equal to 10');
  });

  it('should return error message when value is less than 10 characters', () => {
    expect(minValueValidator(-1)).toEqual('Value must be greater than or equal to 10');
  });

  it('should return error message when value is less than 10 characters', () => {
    expect(minValueValidator('8')).toEqual('Value must be greater than or equal to 10');
  });

  it('should return error message when value is less than 10 characters', () => {
    expect(minValueValidator(8)).toEqual('Value must be greater than or equal to 10');
  });

  it('should not return error when value is greater than 10', () => {
    expect(minValueValidator('12')).toBeUndefined();
  });

  it('should not return error when value is greater than 10', () => {
    expect(minValueValidator(12)).toBeUndefined();
  });
});

