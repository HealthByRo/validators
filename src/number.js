export const number = (value) => {
  if (value && isNaN(Number(value))) {
    return 'Must be a number';
  }

  return undefined;
};

export default number;
