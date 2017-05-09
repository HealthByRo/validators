export const email = (value) => {
  if (value && (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value))) {
    return 'Email format invalid';
  }

  return undefined;
};

