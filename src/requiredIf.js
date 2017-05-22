export const requiredIf = (otherFieldName, errorText) => (value, values) => {
  if (values[otherFieldName] && !value) {
    return errorText;
  }

  return undefined;
};
