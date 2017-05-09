export const minLength = (min, label) => (value) => {
  if (value && value.length < min) {
    return label ? `${label} must be ${min} characters or more` : `Must be ${min} characters or more`;
  }

  return undefined;
};
