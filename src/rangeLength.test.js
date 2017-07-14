import rangeLength from './rangeLength';

describe('rangeLength', () => {
  it('should be defined', () => {
    expect(rangeLength).toEqual(rangeLength);
  });

  describe('when calling rangeLength(2, 6, "Short words")', () => {
    const shortWords = rangeLength(2, 6, 'Short words');
    const errorMessage = 'Short words must be between 2 and 6 characters';

    describe('should be a function', () => {
      expect(typeof shortWords === 'function').toBeTruthy();
    });

    it('should return error message when word has less then 2 chars', () => {
      expect(shortWords('a')).toEqual(errorMessage);
    });

    it('should return error message when word has more then 6 chars', () => {
      expect(shortWords('a')).toEqual(errorMessage);
    });

    it('should not return error message when word has 2 chars', () => {
      expect(shortWords('ab')).toBeUndefined();
    });

    it('should not return error message when word has 6 chars', () => {
      expect(shortWords('abcdef')).toBeUndefined();
    });
  });

  describe('when calling rangeLength(10, 50) - without name of field', () => {
    const shortWords = rangeLength(10, 50);
    const errorMessage = 'Must be between 10 and 50 characters';

    describe('should be a function', () => {
      expect(typeof shortWords === 'function').toBeTruthy();
    });

    it('should return error message when word has less then 10 chars', () => {
      expect(shortWords('a')).toEqual(errorMessage);
    });

    it('should return error message when word has more then 50 chars', () => {
      expect(shortWords('a')).toEqual(errorMessage);
    });

    it('should not return error message when word has 12 chars', () => {
      expect(shortWords('abcdefghijkl')).toBeUndefined();
    });
  });
});
