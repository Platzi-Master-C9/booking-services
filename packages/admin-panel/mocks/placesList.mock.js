const { faker } = require('@faker-js/faker');

module.exports = [
  {
    id: 1,
    placeName: faker.company.companyName(),
    status: 'ACTIVE',
    hostName: faker.name.findName(),
  },
  {
    id: 2,
    placeName: faker.company.companyName(),
    status: 'ACTIVE',
    hostName: faker.name.findName(),
  },
  {
    id: 3,
    placeName: faker.company.companyName(),
    status: 'INACTIVE',
    hostName: faker.name.findName(),
  },
  {
    id: 4,
    placeName: faker.company.companyName(),
    status: 'ACTIVE',
    hostName: faker.name.findName(),
  },
  {
    id: 5,
    placeName: faker.company.companyName(),
    status: 'ACTIVE',
    hostName: faker.name.findName(),
  },
];
