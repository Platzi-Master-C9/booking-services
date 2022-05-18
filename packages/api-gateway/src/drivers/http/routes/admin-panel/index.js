const { adminPanelAdapters } = require('../../adapters');
const {
  defaultSchema,
  changeUSerStatusSchema,
  userListSchema,
  userDetailSchema,
  adminIDSchema,
  adminListSchema,
  placesListSchema,
  editUserSchema,
  bookingListSchema,
  createAdminSchema,
} = require('./schema');

async function adminPanelRouter(fastify) {
  await fastify.get('/', { schema: defaultSchema }, adminPanelAdapters.sayHello);
  await fastify.patch('/user-status/:user_id', { schema: changeUSerStatusSchema }, adminPanelAdapters.changeUserStatus);
  await fastify.get('/users', { schema: userListSchema }, adminPanelAdapters.getUsers);
  await fastify.get('/users/:user_id', { schema: userDetailSchema }, adminPanelAdapters.getUserDetail);
  await fastify.get('/admins', { schema: adminListSchema }, adminPanelAdapters.getAdmins);
  await fastify.get('/admins/:admin_id', { schema: adminIDSchema }, adminPanelAdapters.getAdminId);
  await fastify.get('/places', { schema: placesListSchema }, adminPanelAdapters.listPlaces);
  await fastify.patch('/users/:user_id', { schema: editUserSchema }, adminPanelAdapters.editUserInfo);
  await fastify.get('/bookings', { schema: bookingListSchema }, adminPanelAdapters.listBookings);
  await fastify.post('/admins', { schema: createAdminSchema }, adminPanelAdapters.createAdmin);

}
module.exports = adminPanelRouter;
