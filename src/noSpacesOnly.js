export const noSpacesOnly = (value) => {
  const pattern = /\S+/g;

  if (value && !pattern.test(value)) {
    return 'Field cannot consist of spaces only';
  }

  return undefined;
};

export default noSpacesOnly;
