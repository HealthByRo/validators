![IMAGE](./coverage.svg)

# validators

Validators module is set of validation functions which you can use to validate user input.

You can import validator function directly from module, eq:

```js
import { required } from 'validators';
```

or from specific validator file:

```js
import { required } from 'validators/lib/required';
```

**Note**: Second import, imports only one file with specific validator but first whole *validators* module.

## Validation functions:

Each validation functions return undefined when validation passed or error message when failed.

 * **cvcRangeLength(input)** - checks if CVV has 3 or 4 characters
 * **email(input)** - checks if email is valid
 * **matchToNewPassword(input, values)** - check if password match to new password (values.newPassword)
 * **matchToPassword(input, values)** - check if password match to new password (values.password)
 * **number(input)** - check if input is valid number. Note: number as string is still valid number.
 * **passcodeRangeLength(input)** - checks if passcode has 0 or 1 characters
 * **passwordFormat(input)** - check if password has valid format: must include at least one lowercase letter and number 
 * **passwordMinLength(input)** - checks if password has at least 8 characters
 * **required(input)** - checks if input is not null, not undefined or is not empty string. Boolean false and zero number is treated as filled. 
 * **zipcodeAustralian(input)** - check if zip code is valid Australian zip code: has 4 digits (9999)
 * **zipcodeUSA(input)** - check if zip code is valid USA zip code: has 5 digits (99999) or 5 digits dash and 4 digits (99999-9999)

## Validation functions creators:

Below is list of functions, which creats validation function based on their params:

 * **fieldsMatch(otherFieldName, errorText): fn(value, values)** - creates validation function which compare `value` with value under `otherFieldName` property in `values` object
 * **rangeLength(min, max, [label]): fn(value)** - creates validation function which checks if `value` is not shorther than `min` characters and longer than `max` characters
 * **maxLength(max, [label]): fn(value)** - creates validation function which checks if `value` is not longer than `max` characters
 * **minLength(min, [label]): fn(value)** - creates validation function which checks if `value` is not shorther than `min` 

## Set of validators:

**setOfPasswordValidators** - it is array which contains these validators: required, passwordMinLength, passwordFormat
