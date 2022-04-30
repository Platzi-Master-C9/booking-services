const { adminPanelAdapters } = require('../../adapters');
const {
  defaultSchema,
  changeUSerStatusSchema,
  userListSchema,
  userDetailSchema,
} = require('./schema');

async function adminPanelRouter(fastify) {
  await fastify.get('/', { schema: defaultSchema }, adminPanelAdapters.sayHello);
  await fastify.patch('/user-status/:user_id', { schema: changeUSerStatusSchema }, adminPanelAdapters.changeUserStatus);
  await fastify.get('/users', { schema: userListSchema }, adminPanelAdapters.getUsers);
  await fastify.get('/users/:user_id', { schema: userDetailSchema }, adminPanelAdapters.getUserDetail);
}
module.exports = adminPanelRouter;
