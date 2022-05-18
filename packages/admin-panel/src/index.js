// Services
const adminPanelService = require('./useCases');

// aquí importamos el servicio que queremos usar
const listPlacesMock = require('../mocks/placesList.mock');
const bookingsMock = require('../mocks/bookingsList.mock');
const validatorHandler = require('./utils/validator/validatorHandler');

const {
  createAdminSchema,
} = require('./utils/validator/schema/admin.schema');

module.exports = {
  sayHello: adminPanelService.firstCase.sayHello,
  changeUserStatus: adminPanelService.userStatus.changeUserStatus,
  getUsers: adminPanelService.userList.getUsers,
  getUserDetail: adminPanelService.userDetail.getUserDetail,
  getAdminId: adminPanelService.adminId.getAdminId,
  getAdmins: adminPanelService.adminList.getAdmins,
  listPlaces: adminPanelService.places.listPlaces(listPlacesMock),
  editUserInfo: adminPanelService.userEdit.editUserInfo,
  listBookings: adminPanelService.bookings.listBookings(bookingsMock),
  createAdmin: validatorHandler.bind(
    null,
    adminPanelService.adminCreate.createAdmin,
    createAdminSchema,
  ),
};
