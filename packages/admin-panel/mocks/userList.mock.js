const { faker } = require('@faker-js/faker');

const userList = [
  {
    id: 1,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile: 2,
  },
  {
    id: 2,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'BANNED',
    profile: 1,
  },
  {
    id: 3,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile: 1,
  },
  {
    id: 4,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile: 1,
  },
];

module.exports = {
  userList,
};
