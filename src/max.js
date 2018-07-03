export const max = (maxValue) => (value) => {
  if (Number(value) >= Number(maxValue)) {
    return `Value must be less than or equal to ${maxValue}`;
  }

  return undefined;
};

export default max;
