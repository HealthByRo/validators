export const fieldsMatch = (otherFieldName, errorText) => (value, values) => {
  let newValues;

  if (typeof values.toJS === 'function') {
    newValues = values.toJS();
  } else {
    newValues = values;
  }

  if (newValues[otherFieldName]) {
    if (value === newValues[otherFieldName]) {
      return undefined;
    }

    return errorText;
  }

  return undefined;
};
