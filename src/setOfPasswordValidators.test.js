import cvcRangeLength from './cvcRangeLength';

describe('cvcRangeLength', () => {
  it('should be defined', () => {
    expect(cvcRangeLength).toEqual(cvcRangeLength);
  });

  it('should return error message when when cvc is 2 chars length', () => {
    expect(cvcRangeLength('12345')).toEqual('CVV must be between 3 and 4 characters');
  });

  it('should return error message when when cvc is 5 chars length', () => {
    expect(cvcRangeLength('12345')).toEqual('CVV must be between 3 and 4 characters');
  });

  it('should not return error when cvc is 3 chars length', () => {
    expect(cvcRangeLength('123')).toBeUndefined();
  });

  it('should not return error when cvc is 4 chars length', () => {
    expect(cvcRangeLength('1234')).toBeUndefined();
  });
});
