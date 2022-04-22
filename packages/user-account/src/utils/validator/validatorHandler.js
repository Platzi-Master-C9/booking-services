function validatorHandler(schema, property) {
  const { error } = schema.validate(property, { abortEarly: false });
  if (error) {
    return error;
  }
  return property;
}

module.exports = validatorHandler;
