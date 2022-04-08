const { adminPanelAdapters } = require('../../../adapters');
const schema = require('./schema');

async function adminPanelRouter(fastify) {
  await fastify.get('/', adminPanelAdapters.sayHello);
  await fastify.patch('/user-status/:user_id', { schema }, adminPanelAdapters.changeUserStatus);
}
module.exports = adminPanelRouter;
