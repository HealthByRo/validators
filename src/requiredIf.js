export const requiredIf = (otherFieldName, errorText) => (value, values) => {
  if (values[otherFieldName]) {
    return errorText;
  }

  return undefined;
};
