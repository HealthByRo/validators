import oldPasswordRequired from './oldPasswordRequired';

describe('oldPasswordRequired', () => {
  it('should be defined', () => {
    expect(oldPasswordRequired).toEqual(oldPasswordRequired);
  });

  it('should return error message when newPassword is provided but not old password', () => {
    expect(oldPasswordRequired(null, { newPassword: 'abcd1234' })).toEqual('Old password is required if providing a new one');
  });

  it('should not return error message when newPassword is not provided', () => {
    expect(oldPasswordRequired(null, {})).toBeUndefined();
  });

  it('should not return error message when newPassword is provided and old one', () => {
    expect(oldPasswordRequired('xyz123', { newPassword: 'abcd1234' })).toBeUndefined();
  });
});
