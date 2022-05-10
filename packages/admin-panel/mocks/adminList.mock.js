const { faker } = require('@faker-js/faker');

const adminList = [
  {
    id: 1,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 2,
  },
  {
    id: 2,
    fullName: 'Paco Torres',
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 3,
    fullName: 'Paco Vazquez',
    urlImage: faker.image.avatar(),
    profile: 2,
  },
  {
    id: 4,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 2,
  },
  {
    id: 5,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 6,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 7,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 8,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 9,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 2,
  },
  {
    id: 10,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 1,
  },
  {
    id: 11,
    fullName: faker.name.findName(),
    urlImage: faker.image.avatar(),
    profile: 3,
  },
];

module.exports = {
  adminList,
};
