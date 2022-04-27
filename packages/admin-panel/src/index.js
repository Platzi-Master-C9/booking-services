// Services
const adminPanelService = require('./useCases');

module.exports = {
  sayHello: adminPanelService.firstCase.sayHello,
  changeUserStatus: adminPanelService.userStatus.changeUserStatus,
  getUsers: adminPanelService.userList.getUsers,
  getAdminId: adminPanelService.adminId.getAdminId,
};
