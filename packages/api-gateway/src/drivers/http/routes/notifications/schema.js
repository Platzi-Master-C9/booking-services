/** @type {import('fastify').RouteOptions['schema']} */
const welcomeNotificationsSchema = {
  description: 'Welcome Notifications',
  tags: ['Notifications'],
  response: {
    200: {
      type: 'object',
      description: 'Response with a welcome message',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = welcomeNotificationsSchema;
