const regexp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const zipcodeUSA = (value) => {
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode.';
  }

  return undefined;
};

export default zipcodeUSA;

