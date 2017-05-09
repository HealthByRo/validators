export const passwordFormat = (value) => {
  if (value && (!/^(?=.*[a-z])(?=.*\d).+$/i.test(value))) {
    return 'Password format invalid (must include at least one letter and at least one character)';
  }

  return undefined;
};
