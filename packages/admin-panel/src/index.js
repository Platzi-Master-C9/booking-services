// Services
const adminPanelService = require('./useCases');

const { userList } = require('../mocks/userList.mock.js');

module.exports = {
  sayHello: adminPanelService.firstCase.sayHello,
  changeUserStatus: adminPanelService.userStatus.changeUserStatus,
  getUsers: () => userList,
};
