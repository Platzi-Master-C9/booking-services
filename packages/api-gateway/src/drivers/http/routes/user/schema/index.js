// users schemas
const createUserSchema = require('./users/createUserSchema');
const validateUserSchema = require('./users/validateUserSchema');
const updateUserSchema = require('./users/updateUserSchema');
const getUserSchema = require('./users/getUserSchema');

// bookmark schemas
const createBookmarkSchema = require('./bookmark/createBookmarkSchema');

module.exports = {
  createUserSchema,
  validateUserSchema,
  updateUserSchema,
  getUserSchema,
  createBookmarkSchema
};
