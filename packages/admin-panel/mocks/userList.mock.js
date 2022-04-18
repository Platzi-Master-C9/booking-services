const { faker } = require('@faker-js/faker');

const userList = [
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile:2,
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile:1,
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile:1,
  },
  {
    id: faker.datatype.uuid(),
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    dateOfRegister: faker.date.future(),
    status: 'ACTIVE',
    profile:1,
  },
];

module.exports = {
  userList,
};
