const boom = require('@hapi/boom');

async function createUser(model, data) {
  try {
    const newUser = await model.users.create(data);
    return newUser;
  } catch (error) {
    return boom.badRequest(error);
  }
}

function validateUser(model, data) {
  return data;
}

function updateUser(model, data) {
  return data;
}

function deleteUser(model, data) {
  return data;
}

module.exports = {
  createUser,
  validateUser,
  updateUser,
  deleteUser,
};
