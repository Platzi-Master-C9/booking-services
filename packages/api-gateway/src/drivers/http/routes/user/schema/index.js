// users schemas
const createUserSchema = require('./users/createUserSchema');
const validateUserSchema = require('./users/validateUserSchema');
const updateUserSchema = require('./users/updateUserSchema');
const getUserSchema = require('./users/getUserSchema');

// bookmark schemas
const createBookmarkSchema = require('./bookmark/createBookmarkSchema');
const getBookmarkSchema = require('./bookmark/getBookmarkSchema');
const getBookmarkListSchema = require('./bookmark/getBookmarkListSchema');
const updateBookmarkSchema = require('./bookmark/updateBookmarkSchema');

module.exports = {
  createUserSchema,
  validateUserSchema,
  updateUserSchema,
  getUserSchema,
  createBookmarkSchema,
  getBookmarkSchema,
  getBookmarkListSchema,
  updateBookmarkSchema,
};
