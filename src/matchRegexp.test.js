import matchRegexp from './matchRegexp';

describe('matchRegexp', () => {
  const ERROR_MSG = 'INVALID_TEXT';
  let validator;

  it('should be defined', () => {
    expect(matchRegexp).toBeDefined();
  });

  describe('/^[a-z]*$/', () => {
    beforeEach(() => {
      validator = matchRegexp(
        /^[a-z]*$/,
        ERROR_MSG,
      );
    });

    it('should return ERROR_MSG for 123', () => {
      expect(validator('123')).toEqual(ERROR_MSG);
    });

    it('should NOT return ERROR_MSG for abc', () => {
      expect(validator('abc')).toBeUndefined();
    });
  });

  describe('/^[0-9]*$/', () => {
    beforeEach(() => {
      validator = matchRegexp(
        /^[0-9]*$/,
        ERROR_MSG,
      );
    });

    it('should return ERROR_MSG for abc', () => {
      expect(validator('abc')).toEqual(ERROR_MSG);
    });

    it('should NOT return ERROR_MSG for 123', () => {
      expect(validator('123')).toBeUndefined();
    });
  });
});
