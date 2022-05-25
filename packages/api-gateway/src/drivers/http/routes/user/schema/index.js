// users schemas
const createUserSchema = require('./users/createUserSchema');
const validateUserSchema = require('./users/validateUserSchema');
const updateUserSchema = require('./users/updateUserSchema');
const getUserSchema = require('./users/getUserSchema');

module.exports = {
  createUserSchema,
  validateUserSchema,
  updateUserSchema,
  getUserSchema,
};
