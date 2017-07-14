import email from './email';

describe('email', () => {
  it('should be defined', () => {
    expect(email).toEqual(email);
  });

  it('should return error message when email is invalid', () => {
    expect(email('invalidemail@test')).toEqual('Email format invalid');
  });

  it('should not return error when email is "test@test.com" ', () => {
    expect(email('test@test.com')).toBeUndefined();
  });

  it('should not return when email is "john.smith@gmail.com"', () => {
    expect(email('john.smith@gmail.com')).toBeUndefined();
  });

  it('should not return when email is "john.smith@gmail.com"', () => {
    expect(email('john.smith+test@gmail.com')).toBeUndefined();
  });
});
