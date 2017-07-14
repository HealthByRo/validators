export const required = (value) => {
  const type = typeof value;

  if (!value && type !== 'boolean' && type !== 'number') {
    return 'Field required';
  }

  return undefined;
};

export default required;
