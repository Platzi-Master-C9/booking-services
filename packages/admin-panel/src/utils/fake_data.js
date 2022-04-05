const { faker } = require('@faker-js/faker');

const Users = [
  {
    id: 1,
    first_name: 'John',
    second_name: 'albeiro',
    first_surname: 'Doe',
    second_surname: 'Gonzales',
    id_type_user: '3',
    email: 'jhon@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    first_name: 'esteban',
    second_name: 'felipe',
    first_surname: 'perez',
    second_surname: 'sosa',
    id_type_user: '3',
    email: 'esteban@gmail.com',
    status: 'active'
  }
];

module.exports = {
  Users
}
