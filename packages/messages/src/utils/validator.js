// External dependencies
const { Logger } = require('@booking-services/shared');

const isString = (value) => typeof value === 'string' || value instanceof String;

/**
 * @param {string} value  Field value
 * @param {() => boolean} validatorFn Validator function
 * @param {string} errorMessage Error message
 * @param {unknown} options Validator options
 * @returns {boolean} True if valid, false otherwise
 * @throws {Error} If validatorFn returns false
 */
const validate = (value, validatorFn, errorMessage, options) => {
  if (!validatorFn(value, options)) {
    Logger.error(`[messages]: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  return true;
};

const bulkValidation = (validations, collectErrors = false) => {
  const errors = [];

  for (let i = 0; i < validations.length; i += 1) {
    const validation = validations[i];

    try {
      validate(
        validation.value,
        validation.validatorFn,
        validation.errorMessage,
        validation.options,
      );
    } catch (error) {
      if (collectErrors) {
        errors.push(error.message);
      } else {
        throw error;
      }
    }
  }

  if (collectErrors) {
    return errors;
  }

  return undefined;
};

module.exports = {
  validate,
  bulkValidation,
  isString,
};
