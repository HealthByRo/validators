export const fieldsMatch = (otherFieldName, errorText) => (value, values) => {
  if (values[otherFieldName]) {
    if (value === values[otherFieldName]) {
      return undefined;
    }

    return errorText;
  }

  return undefined;
};

export default fieldsMatch;
