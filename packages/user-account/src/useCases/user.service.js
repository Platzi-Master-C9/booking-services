const validatorHandler = require("../utils/validator/validatorHandler");
const { createUserSchema } = require("../utils/validator/schema/user.schema");
const boom = require('@hapi/boom');

function createUser (model) {
  const data = validatorHandler(createUserSchema, model);
  if (data != model) {
    return boom.badRequest(data).details
  }
  return data;
}

module.exports = {
  createUser,
};
