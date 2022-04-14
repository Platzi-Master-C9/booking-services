// Internal dependencies
const { fastify } = require('../../../../../../src/drivers/http/server');

describe('GET /status', () => {
  it('should return the status of the server', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/status',
    });

    expect(response.statusCode).toBe(200);
    const data = response.json();
    expect(data).toHaveProperty('status');
    expect(typeof data.status).toBe('string');
  });
});
