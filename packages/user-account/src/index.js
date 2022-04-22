// Services
const { userService } = require('./useCases');

// Domains

module.exports = {
  createUser: userService.createUser,
  validateUser: userService.validateUser,
};
