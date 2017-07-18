export const passwordFormat = (value) => {
  if (value && (!/^(?=.*[a-z])(?=.*\d).+$/.test(value))) {
    return 'Password format invalid (must include at least one lowercase letter and number)';
  }

  return undefined;
};

export default passwordFormat;
