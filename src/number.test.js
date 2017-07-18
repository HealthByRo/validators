import number from './number';

describe('number', () => {
  it('should be defined', () => {
    expect(number).toBeDefined();
  });

  it('should return error message when input is not a number', () => {
    expect(number('abcd')).toEqual('Must be a number');
  });

  it('should return error message when input has one letter', () => {
    expect(number('12345a')).toEqual('Must be a number');
  });

  it('should not return error message when input is a number as string', () => {
    expect(number('12345')).toBeUndefined();
  });

  it('should not return error message when input is a number', () => {
    expect(number(12345)).toBeUndefined();
  });

  it('should not return error message when input is a float number', () => {
    expect(number(12345.02)).toBeUndefined();
  });

  it('should not return error message when input is a float number as string', () => {
    expect(number('12345.02')).toBeUndefined();
  });
});
