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

const Admins = [
  {
    id: 1,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 2,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 2,
  },
  {
    id: 3,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 3,
  },
  {
    id: 4,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 4,
  },
  {
    id: 5,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 3,
  },
  {
    id: 6,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 2,
  },
];

function getAdmin(adminId) {
  const idx = Admins.findIndex((admin) => admin.id === adminId);
  if (idx === -1) { return false; }
  return Admins[idx];
}

module.exports = {
  getUser,
  sendMessage,
  getAdmin,
};
