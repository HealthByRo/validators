const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const email = (value) => {
  if (value && (regexp.test(value))) {
    return 'Email format invalid';
  }

  return undefined;
};
