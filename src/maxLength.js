export const maxLength = (max, label) => (value) => {
  if (value && value.length > max) {
    return label ? `${label} must be ${max} characters or less` : `Must be ${max} characters or less`;
  }

  return undefined;
};

export default maxLength;
