const othersSquad = require('../utils/fake_data');
const { userStatus, readableStatus } = require('../utils/constants');

const changeUserStatus = (userId, status, reason) => {
  // TODO: validation to avoid going back to the previous status

  // verify if status is valid
  if (typeof userStatus[status] === 'undefined') {
    throw new Error('Invalid status');
  }

  // verify if user exists
  const user = othersSquad.getUser(userId);

  if (!user) {
    throw new Error('User does not exist');
  }

  if (typeof reason !== 'string') {
    throw new Error('Reason must be a string');
  }

  // change user status
  user.status = status;

  // send message to user
  othersSquad.sendMessage(userId, `El Estado de cuenta ha cambiado a ${readableStatus[status]}: ${reason}`);

  return 'ok';
};

module.exports = {
  changeUserStatus,
};
