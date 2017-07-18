import requiredIf from './requiredIf';

describe('oldPasswordRequired', () => {
  const lastNameRequired = requiredIf('firstName', 'Last name is required');
  const errorMessage = 'Last name is required';

  it('should be defined', () => {
    expect(typeof lastNameRequired === 'function').toBeTruthy();
  });

  it('should return error message when firstName is provided but not last name', () => {
    expect(lastNameRequired(null, { firstName: 'John' })).toEqual(errorMessage);
  });

  it('should not return error message when firstName is not provided', () => {
    expect(lastNameRequired(null, {})).toBeUndefined();
  });

  it('should not return error message when lastName is provided but not fistName', () => {
    expect(lastNameRequired('Smith', {})).toBeUndefined();
  });

  it('should not return error message when firstName is provided and last name', () => {
    expect(lastNameRequired('Smith', { firstName: 'John' })).toBeUndefined();
  });

  describe('when values is immutable object', () => {
    const values = {
      toJS: () => ({ firstName: 'John' }),
    };

    it('should not return error message when firstName is provided and last name', () => {
      expect(lastNameRequired('Smith', values)).toBeUndefined();
    });
  });
});
