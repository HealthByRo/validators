import setOfPasswordValidators from './setOfPasswordValidators';
import required from './required';
import passwordMinLength from './passwordMinLength';
import passwordFormat from './passwordFormat';

describe('setOfPasswordValidators', () => {
  it('should be defined', () => {
    expect(setOfPasswordValidators).toBeDefined();
  });

  it('should has "required" validator', () => {
    expect(setOfPasswordValidators.indexOf(required)).not.toBe(-1);
  });

  it('should has "passwordMinLength" validator', () => {
    expect(setOfPasswordValidators.indexOf(passwordMinLength)).not.toBe(-1);
  });

  it('should has "passwordFormat" validator', () => {
    expect(setOfPasswordValidators.indexOf(passwordFormat)).not.toBe(-1);
  });
});
