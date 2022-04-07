const Users = [
  {
    id: 1,
    first_name: 'John',
    second_name: 'albeiro',
    first_surname: 'Doe',
    second_surname: 'Gonzales',
    id_type_user: '3',
    email: 'jhon@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    first_name: 'esteban',
    second_name: 'felipe',
    first_surname: 'perez',
    second_surname: 'sosa',
    id_type_user: '3',
    email: 'esteban@gmail.com',
    status: 'active',
  },
];

const getUser = function (userId) {
  const idx = Users.findIndex((user) => user.id === userId);
  if (idx === -1) { return false; }
  return Users[idx];
};

const sendMessage = function (userId, message) {
  console.log(`Sending message: ${message} to user: ${userId}`);
};

module.exports = {
  getUser,
  sendMessage,
};
