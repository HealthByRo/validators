export const requiredIf = (otherFieldName, errorText) => (value, values) => {
  let newValues;

  if (typeof values.toJS === 'function') {
    newValues = values.toJS();
  } else {
    newValues = values;
  }

  if (newValues[otherFieldName] && !value) {
    return errorText;
  }

  return undefined;
};

export default requiredIf;
