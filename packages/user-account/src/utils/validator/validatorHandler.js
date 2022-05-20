const boom = require('@hapi/boom');

function validatorHandler(useCase, model, schema, property) {
  const { error } = schema.validate(property, { abortEarly: false });
  if (error) {
    return boom.badData(error);
  }
  return useCase(model, property);
}

module.exports = validatorHandler;
