import zipcodeUSA from './zipcodeUSA';

describe('zipcodeUSA', () => {
  const errorMessage = 'Invalid zipcode.';

  it('should be defined', () => {
    expect(zipcodeUSA).toBeDefined();
  });

  it('should return error message when zip code has less then 5 digits', () => {
    expect(zipcodeUSA('1234')).toEqual(errorMessage);
  });

  it('should return error message when zip code has more then 5 digits', () => {
    expect(zipcodeUSA('123456')).toEqual(errorMessage);
  });

  it('should return error message when zip code has 5 characters but not all of them are digits', () => {
    expect(zipcodeUSA('123ab')).toEqual(errorMessage);
  });

  it('should return error message when zip code has 5 characters but not all of them are digits', () => {
    expect(zipcodeUSA('123AB')).toEqual(errorMessage);
  });

  it('should not return error message when zip code has 5 digits', () => {
    expect(zipcodeUSA('12345')).toBeUndefined();
  });

  it('should not return error message when zip code has 5 and 4 digits', () => {
    expect(zipcodeUSA('12345-1234')).toBeUndefined();
  });

  it('should return error message when zip code has 5 and 5 digits', () => {
    expect(zipcodeUSA('12345-12345')).toEqual(errorMessage);
  });
});
