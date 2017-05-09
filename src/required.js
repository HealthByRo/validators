export const required = (value) => {
  if (!value) {
    return 'Field required';
  }

  return undefined;
};
