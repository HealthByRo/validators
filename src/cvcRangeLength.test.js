import cvcRangeLength from './cvcRangeLength';

describe('cvcRangeLength', () => {
  const errorMessage = 'CVV must be between 3 and 4 characters';

  it('should be defined', () => {
    expect(cvcRangeLength).toBeDefined();
  });

  it('should return error message when cvc is 2 chars length', () => {
    expect(cvcRangeLength('12345')).toEqual(errorMessage);
  });

  it('should return error message when cvc is 5 chars length', () => {
    expect(cvcRangeLength('12345')).toEqual(errorMessage);
  });

  it('should not return error when cvc is 3 chars length', () => {
    expect(cvcRangeLength('123')).toBeUndefined();
  });

  it('should not return error when cvc is 4 chars length', () => {
    expect(cvcRangeLength('1234')).toBeUndefined();
  });
});
