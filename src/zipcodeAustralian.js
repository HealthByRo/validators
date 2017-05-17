const regexp = /^\d{4}$/;

export const zipcodeAustralian = (value) => {
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode. Should be in "xxxx" format, numbers only.';
  }

  return undefined;
};
