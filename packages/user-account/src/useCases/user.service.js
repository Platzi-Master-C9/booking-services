const boom = require('@hapi/boom');
const validatorHandler = require('../utils/validator/validatorHandler');
const { createUserSchema } = require('../utils/validator/schema/user.schema');

function createUser(model) {
  const data = validatorHandler(createUserSchema, model);
  if (data !== model) {
    return boom.badRequest(data);
  }
  return data;
}

module.exports = {
  createUser,
};
