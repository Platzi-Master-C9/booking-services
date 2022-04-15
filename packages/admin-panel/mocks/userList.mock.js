const { faker } = require('@faker-js/faker');

const userList = [
  {
    id: faker.datatype.uuid(),
    full_name: faker.name.findName(),
    url_image: faker.image.avatar(),
    date_of_register: faker.date.future(),
    status: "ACTIVE",
  },
  {
    id: faker.datatype.uuid(),
    full_name: faker.name.findName(),
    url_image: faker.image.avatar(),
    date_of_register: faker.date.future(),
    status: "ACTIVE",
  },
  {
    id: faker.datatype.uuid(),
    full_name: faker.name.findName(),
    url_image: faker.image.avatar(),
    date_of_register: faker.date.future(),
    status: "ACTIVE",
  },
  {
    id: faker.datatype.uuid(),
    full_name: faker.name.findName(),
    url_image: faker.image.avatar(),
    date_of_register: faker.date.future(),
    status: "ACTIVE",
  }
]

module.exports = {
  userList
}