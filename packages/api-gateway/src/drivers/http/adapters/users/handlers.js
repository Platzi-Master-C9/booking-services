// user services
const createUser = require('./userServices/createUser');
const validateUser = require('./userServices/validateUser');
const updateUser = require('./userServices/updateUser');
const deleteUser = require('./userServices/deleteUser');

module.exports = {
  createUser,
  validateUser,
  updateUser,
  deleteUser,
};
