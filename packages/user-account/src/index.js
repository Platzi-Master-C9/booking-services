// Services
const { userService } = require('./useCases');

// Domains
const { models } = require('./drivers/postgres/sequelizer');


// validator
const validatorHandler = require('./utils/validator/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  validateUserSchema,
  getUserSchema,
} = require('./utils/validator/schema/user.schema');

module.exports = {
  createUser: validatorHandler.bind(null, userService.createUser, models, createUserSchema),
  validateUser: validatorHandler.bind(null, userService.validateUser, models, validateUserSchema),
  updateUser: validatorHandler.bind(null, userService.updateUser, models, updateUserSchema),
  deleteUser: validatorHandler.bind(null, userService.deleteUser, models, getUserSchema),
};
