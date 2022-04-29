const { fastify } = require('../../src/drivers/http/server');

describe('Given a client that wants to delete a place', () => {
  // the happy test
  describe('When it does the DELETE petition with the id', () => {
    test('Then it must send a 200 status code', async () => {
      const response = await fastify.inject({
        method: 'DELETE',
        url: 'places/74',
      });
      expect(response.statusCode).toBe(200);
    });
  });
  // the sad tests
  describe('When it does the DELETE petition with an incorrect id', () => {
    test('Then it must send a 400 status code', async () => {
      const response = await fastify.inject({
        method: 'DELETE',
        url: 'places/a',
      });
      expect(response.statusCode).toBe(400);
    });
  });
  describe('When it does the DELETE petition with an unexisting id', () => {
    test('Then it must send a 404 status code', async () => {
      const response = await fastify.inject({
        method: 'DELETE',
        url: 'places/1000',
      });
      expect(response.statusCode).toBe(404);
    });
  });
});
