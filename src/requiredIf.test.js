import requiredIf from './requiredIf';

describe('oldPasswordRequired', () => {
  const firstNameRequired = requiredIf('firstName', 'First name is required');
  const errorMessage = 'First name is required';

  it('should be defined', () => {
    expect(typeof firstNameRequired === 'function').toBeTruthy();
  });

  it('should return error message when firstName is provided but not last name', () => {
    expect(firstNameRequired(null, { firstName: 'John' })).toEqual(errorMessage);
  });

  it('should not return error message when firstName is not provided', () => {
    expect(firstNameRequired(null, {})).toBeUndefined();
  });

  it('should not return error message when firstName is provided and last name', () => {
    expect(firstNameRequired('Smith', { firstName: 'John' })).toBeUndefined();
  });

  describe('when values is immutable object', () => {
    const values = {
      toJS: () => ({ firstName: 'John' }),
    };

    it('should not return error message when firstName is provided and last name', () => {
      expect(firstNameRequired('Smith', values)).toBeUndefined();
    });
  });
});
