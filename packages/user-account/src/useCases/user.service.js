const boom = require('@hapi/boom');
const validatorHandler = require('../utils/validator/validatorHandler');
const { createUserSchema, validateUserSchema, updateUserSchema } = require('../utils/validator/schema/user.schema');

function createUser(model) {
  const data = validatorHandler(createUserSchema, model);
  if (data !== model) {
    return boom.badData(data);
  }
  return data;
}

function validateUser(model) {
  const data = validatorHandler(validateUserSchema, model);
  if (data !== model) {
    return boom.badData(data);
  }
  return data;
}

function updateUser(model) {
  const data = validatorHandler(updateUserSchema, model);
  if (data !== model) {
    return boom.badData(data);
  }
  return data;
}

module.exports = {
  createUser,
  validateUser,
  updateUser,
};
