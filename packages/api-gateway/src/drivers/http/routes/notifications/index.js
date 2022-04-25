const { notificationsAdapters } = require('../../adapters');
const welcomeNotificationsSchema = require('./schema');

async function notificationsRouter(fastify) {
  await fastify.get('/notifications/welcome', { schema: welcomeNotificationsSchema }, notificationsAdapters.welcomeNotifications);
}

module.exports = notificationsRouter;
