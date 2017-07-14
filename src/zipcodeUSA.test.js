import zipcodeUSA from './zipcodeUSA';

describe('zipcodeUSA', () => {
  const errorMessage = 'Invalid zipcode.';

  it('should be defined', () => {
    expect(zipcodeUSA).toEqual(zipcodeUSA);
  });

  it('should return error message when zip code has less then 4 digits', () => {
    expect(zipcodeUSA('123')).toEqual(errorMessage);
  });

  it('should return error message when zip code has more then 5 digits', () => {
    expect(zipcodeUSA('123456')).toEqual(errorMessage);
  });

  it('should return error message when zip code has more then 4 chars but not all of them are digits', () => {
    expect(zipcodeUSA('12ab')).toEqual(errorMessage);
  });

  it('should return error message when zip code has more then 6 chars but not all of them are digits', () => {
    expect(zipcodeUSA('1234a')).toEqual(errorMessage);
  });

  it('should not return error message when zip code has 4 digits', () => {
    expect(zipcodeUSA('12345')).toBeUndefined();
  });

  it('should not return error message when zip code has 5 and 4 digits', () => {
    expect(zipcodeUSA('12345-1234')).toBeUndefined();
  });
});
