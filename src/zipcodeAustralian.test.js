import zipcodeAustralian from './zipcodeAustralian';

describe('zipcodeAustralian', () => {
  const errorMessage = 'Invalid zipcode. Should be in "xxxx" format, numbers only.';

  it('should be defined', () => {
    expect(zipcodeAustralian).toBeDefined();
  });

  it('should return error message when zip code has less then 4 digits', () => {
    expect(zipcodeAustralian('123')).toEqual(errorMessage);
  });

  it('should return error message when zip code has more then 4 digits', () => {
    expect(zipcodeAustralian('12345')).toEqual(errorMessage);
  });

  it('should return error message when zip code has 4 characters but not all of them are digits', () => {
    expect(zipcodeAustralian('12ab')).toEqual(errorMessage);
  });

  it('should return error message when zip code has 4 digits and extra character', () => {
    expect(zipcodeAustralian('1234A')).toEqual(errorMessage);
  });

  it('should not return error message when zip code has 4 digits', () => {
    expect(zipcodeAustralian('1234')).toBeUndefined();
  });
});
