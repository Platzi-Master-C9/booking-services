const { adminPanelAdapters } = require('../../adapters');
const {default_schema, changeUSerStatusSchema,userListSchema} = require('./schema');

async function adminPanelRouter(fastify) {
  await fastify.get('/', {schema:default_schema}, adminPanelAdapters.sayHello);
  await fastify.patch('/user-status/:user_id', { schema:changeUSerStatusSchema }, adminPanelAdapters.changeUserStatus);
  await fastify.get('/users', { schema:userListSchema }, adminPanelAdapters.getUsers);
}
module.exports = adminPanelRouter;
