const boom = require('@hapi/boom');

function validatorHandler(useCase, schema, property) {
  const { error } = schema.validate(property, { abortEarly: false });
  if (error) {
    return boom.badData(error);
  }
  return useCase(property);
}

module.exports = validatorHandler;
