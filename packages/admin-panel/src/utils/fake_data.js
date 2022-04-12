const { faker } = require('@faker-js/faker');

const Users = [
  {
    id: 1,
    first_name: faker.name.firstName('female'),
    second_name: faker.name.middleName('female'),
    first_surname: faker.name.lastName(),
    second_surname: faker.name.lastName(),
    id_type_user: '3',
    email: faker.internet.email(),
    status: 'active',
  },
  {
    id: 2,
    first_name: faker.name.firstName('male'),
    second_name: faker.name.middleName('male'),
    first_surname: faker.name.lastName(),
    second_surname: faker.name.lastName(),
    id_type_user: '3',
    email: faker.internet.email(),
    status: 'active',
  },
];

function getUser(userId) {
  const idx = Users.findIndex((user) => user.id === userId);
  if (idx === -1) { return false; }
  return Users[idx];
}

function sendMessage(userId, message) {
  // eslint-disable-next-line no-console
  console.log(`Sending message: ${message} to user: ${userId}`);
}

module.exports = {
  getUser,
  sendMessage,
};
