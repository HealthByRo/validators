export const required = (value) => {
  const type = typeof value;

  if (!value && type !== 'number') {
    return 'Field required';
  }

  return undefined;
};

export default required;
