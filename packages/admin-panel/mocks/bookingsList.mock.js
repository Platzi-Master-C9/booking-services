const { faker } = require('@faker-js/faker');

const options = { dateStyle: 'short' };

module.exports = [
  {
    id: 1,
    dateOfBook: faker.date.past().toLocaleDateString(undefined, options),
    placeName: faker.company.companyName(),
    userName: faker.name.findName(),
    status: 'ACTIVE',
    fromDate: faker.date.past().toLocaleDateString(undefined, options),
    endDate: faker.date.future().toLocaleDateString(undefined, options),
  },
  {
    id: 2,
    dateOfBook: faker.date.past().toLocaleDateString(undefined, options),
    placeName: faker.company.companyName(),
    userName: faker.name.findName(),
    status: 'CANCELED',
    fromDate: faker.date.past().toLocaleDateString(undefined, options),
    endDate: faker.date.future().toLocaleDateString(undefined, options),
  },
  {
    id: 3,
    dateOfBook: faker.date.past().toLocaleDateString(undefined, options),
    placeName: faker.company.companyName(),
    userName: faker.name.findName(),
    status: 'ACTIVE',
    fromDate: faker.date.future().toLocaleDateString(undefined, options),
    endDate: faker.date.future().toLocaleDateString(undefined, options),
  },
  {
    id: 4,
    dateOfBook: faker.date.past(),
    placeName: faker.company.companyName(),
    userName: faker.name.findName(),
    status: 'ACTIVE',
    fromDate: faker.date.past().toLocaleDateString(undefined, options),
    endDate: faker.date.future().toLocaleDateString(undefined, options),
  },
  {
    id: 5,
    dateOfBook: faker.date.past().toLocaleDateString(undefined, options),
    placeName: faker.company.companyName(),
    userName: faker.name.findName(),
    status: 'ACTIVE',
    fromDate: faker.date.future().toLocaleDateString(undefined, options),
    endDate: faker.date.future().toLocaleDateString(undefined, options),
  },
];
