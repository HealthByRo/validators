export const zipcodeAustralian = (value) => {
  const regexp = /^\d{4}$/;
  if (value && !regexp.test(value)) {
    return 'Invalid zipcode. Should be in "xxxx" format, numbers only.';
  }

  return undefined;
};
