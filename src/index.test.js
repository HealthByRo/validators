import {
  cvcRangeLength,
  email,
  fieldsMatch,
  matchToNewPassword,
  matchToPassword,
  matchRegexp,
  maxLength,
  minLength,
  number,
  passcodeRangeLength,
  passwordFormat,
  passwordMinLength,
  rangeLength,
  required,
  setOfPasswordValidators,
  zipcodeAustralian,
  zipcodeUSA,
} from './';

describe('validators import', () => {
  it('cvcRangeLength should be defined', () => {
    expect(cvcRangeLength).toBeDefined();
  });

  it('email should be defined', () => {
    expect(email).toBeDefined();
  });

  it('fieldsMatch should be defined', () => {
    expect(fieldsMatch).toBeDefined();
  });

  it('matchToNewPassword should be defined', () => {
    expect(matchToNewPassword).toBeDefined();
  });

  it('matchToPassword should be defined', () => {
    expect(matchToPassword).toBeDefined();
  });

  it('matchRegexp should be defined', () => {
    expect(matchRegexp).toBeDefined();
  });

  it('maxLength should be defined', () => {
    expect(maxLength).toBeDefined();
  });

  it('minLength should be defined', () => {
    expect(minLength).toBeDefined();
  });

  it('number should be defined', () => {
    expect(number).toBeDefined();
  });

  it('passcodeRangeLength should be defined', () => {
    expect(passcodeRangeLength).toBeDefined();
  });

  it('passwordFormat should be defined', () => {
    expect(passwordFormat).toBeDefined();
  });

  it('passwordMinLength should be defined', () => {
    expect(passwordMinLength).toBeDefined();
  });

  it('rangeLength should be defined', () => {
    expect(rangeLength).toBeDefined();
  });

  it('required should be defined', () => {
    expect(required).toBeDefined();
  });

  it('setOfPasswordValidators should be defined', () => {
    expect(setOfPasswordValidators).toBeDefined();
  });

  it('zipcodeAustralian should be defined', () => {
    expect(zipcodeAustralian).toBeDefined();
  });

  it('zipcodeUSA should be defined', () => {
    expect(zipcodeUSA).toBeDefined();
  });
});
