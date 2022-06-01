// user services
const createUser = require('./userServices/createUser');
const validateUser = require('./userServices/validateUser');
const updateUser = require('./userServices/updateUser');
const deleteUser = require('./userServices/deleteUser');

// bookmark services
const createBookmark = require('./bookmarkServices/createBookmark');
const getBookmark = require('./bookmarkServices/getBookmark');

module.exports = {
  createUser,
  validateUser,
  updateUser,
  deleteUser,
  createBookmark,
  getBookmark,
};
