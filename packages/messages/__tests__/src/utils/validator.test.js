// External dependencies
const { Logger } = require('@booking-services/shared');

// Internal dependencies
const { isString, validate, bulkValidation } = require('../../../src/utils/validator');

describe('isString', () => {
  test.each([
    { value: '', expected: true },
    { value: 'test', expected: true },
    { value: 'test string', expected: true },
    { value: 'test string with spaces', expected: true },
    { value: 'test string with spaces and numbers 123', expected: true },
    { value: String('test string with spaces and numbers 123'), expected: true },
    { value: 123, expected: false },
    { value: {}, expected: false },
    { value: [], expected: false },
    { value: null, expected: false },
    { value: undefined, expected: false },
  ])('given $value as input, when checking if is string, then should return $expected', (testCase) => {
    expect(isString(testCase.value)).toBe(testCase.expected);
  });
});

describe('validate', () => {
  describe('given a string value as input', () => {
    describe('when checking if is string, then should return true', () => {
      test('then result should be true', () => {
        expect(validate('test', isString)).toBe(true);
      });
    });
  });

  describe('given a non-string value as input', () => {
    describe('when checking if is string, then should return false', () => {
      test('then should throw an error', () => {
        const errorMessage = 'Value must be a string';
        expect(() => validate(123, isString, errorMessage)).toThrowError(errorMessage);
        expect(Logger.error).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('bulkValidation', () => {
  const makeValidations = (value) => [{
    value,
    validatorFn: isString,
    errorMessage: 'Value must be a string',
  }, {
    value,
    validatorFn: (v) => v === 'test',
    errorMessage: 'Value must be test',
  }];

  describe('given a set of validations', () => {
    test('when value is valid and collectErrors was not set, then should return undefined', () => {
      const validations = makeValidations('test');
      expect(bulkValidation(validations)).toBe(undefined);
    });

    test('when value is valid and collectErrors was set, then should return an empty array', () => {
      const validations = makeValidations('test');
      expect(bulkValidation(validations, true)).toStrictEqual([]);
    });

    test('when value is not valid and collectErrors was not set, then should throw an error', () => {
      const validations = makeValidations(1);
      expect(() => bulkValidation(validations)).toThrow();
    });

    test('when value is valid and collectErrors was set, then should return an array of errors', () => {
      const validations = makeValidations(1);
      const errors = bulkValidation(validations, true);

      expect(Array.isArray(errors)).toBe(true);
      expect(errors).toHaveLength(2);
    });
  });
});
