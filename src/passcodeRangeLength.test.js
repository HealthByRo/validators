import passcodeRangeLength from './passcodeRangeLength';

describe('passcodeRangeLength', () => {
  it('should be defined', () => {
    expect(passcodeRangeLength).toEqual(passcodeRangeLength);
  });

  it('should return error message when input has more then 1 characters', () => {
    expect(passcodeRangeLength('12')).toEqual('PIN must be between 0 and 1 characters');
  });

  it('should not return error when input has 1 characters', () => {
    expect(passcodeRangeLength('1')).toBeUndefined();
  });

  it('should not return error when input has 0 characters', () => {
    expect(passcodeRangeLength('')).toBeUndefined();
  });
});
