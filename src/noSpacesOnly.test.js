import noSpacesOnly from './noSpacesOnly';

describe('noSpacesOnly', () => {
  const errorMessage = 'Field cannot consist of spaces only';

  it('should be defined', () => {
    expect(noSpacesOnly).toBeDefined();
  });

  it('should not return error message when value is undefined', () => {
    expect(noSpacesOnly(undefined)).toBeUndefined();
  });

  it('should not return error message when value is an empty string', () => {
    expect(noSpacesOnly('')).toBeUndefined();
  });

  it('should not return error message when value is a string without spaces', () => {
    expect(noSpacesOnly('lorem')).toBeUndefined();
  });

  it('should not return error message when value is a string consisting of spaces and other characters', () => {
    expect(noSpacesOnly('lorem ipsum dolor sit 1 2 3')).toBeUndefined();
  });

  it('should return error message when value is a string consisting of spaces only', () => {
    expect(noSpacesOnly('   ')).toEqual(errorMessage);
  });
});
