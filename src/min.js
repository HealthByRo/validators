export const min = (minValue) => (value) => {
  if (Number(value) <= Number(minValue)) {
    return `Value must be greater than or equal to ${minValue}`;
  }

  return undefined;
};

export default min;
