// Services
const { userService } = require('./useCases');

// Domains

// validator
const validatorHandler = require('./utils/validator/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  validateUserSchema,
} = require('./utils/validator/schema/user.schema');

module.exports = {
  createUser: validatorHandler.bind(null, userService.createUser, createUserSchema),
  validateUser: validatorHandler.bind(null, userService.validateUser, validateUserSchema),
  updateUser: validatorHandler.bind(null, userService.updateUser, updateUserSchema),
};
