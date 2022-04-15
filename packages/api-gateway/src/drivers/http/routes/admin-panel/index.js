const { adminPanelAdapters } = require('../../adapters');
const {changeUSerStatusSchema,userListSchema} = require('./schema');

async function adminPanelRouter(fastify) {
  await fastify.get('/', adminPanelAdapters.sayHello);
  await fastify.patch('/user-status/:user_id', { changeUSerStatusSchema }, adminPanelAdapters.changeUserStatus);
  await fastify.get('/users', { userListSchema }, adminPanelAdapters.getUsers);
}
module.exports = adminPanelRouter;
