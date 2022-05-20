// const boom = require('@hapi/boom');

async function createUser(model, data) {
  const newUser = await model.users.create(data);
  return newUser;
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
