// Services
const { userService } = require('./useCases');

// Domains
const sequelizer = require('./drivers/postgres/sequelizer');


// validator
const validatorHandler = require('./utils/validator/validatorHandler');
const {
  createUserSchema,
  updateUserSchema,
  validateUserSchema,
  getUserSchema,
} = require('./utils/validator/schema/user.schema');

module.exports = {
  createUser: validatorHandler.bind(null, userService.createUser, sequelizer, createUserSchema),
  validateUser: validatorHandler.bind(null, userService.validateUser, sequelizer, validateUserSchema),
  updateUser: validatorHandler.bind(null, userService.updateUser, sequelizer, updateUserSchema),
  deleteUser: validatorHandler.bind(null, userService.deleteUser, sequelizer, getUserSchema),
};
