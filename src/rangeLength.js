export const rangeLength = (min, max, label) => (value) => {
  if (value && (min > value.length || value.length > max)) {
    return label ? `${label} must be between ${min} and ${max} characters` : `Must be between ${min} and ${max} characters`;
  }

  return undefined;
};
