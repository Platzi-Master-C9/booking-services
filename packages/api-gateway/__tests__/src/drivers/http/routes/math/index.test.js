// Internal dependencies
const { fastify } = require('../../../../../../src/drivers/http/server');

describe('POST /math', () => {
  describe('given 1 as input A and 2 as input B', () => {
    const inputA = 1;
    const inputB = 2;

    describe('when requesting', () => {
      /** @type {import('fastify').FastifyReply} */
      let response;
      let responseData;

      beforeAll(async () => {
        response = await fastify.inject({
          method: 'POST',
          url: '/math',
          payload: {
            inputA,
            inputB,
          },
        });

        responseData = response.json();
      });

      test('then status should be 200', () => {
        expect(response.statusCode).toBe(200);
      });

      test('then result should be 3', () => {
        expect(responseData.result).toBe(3);
      });
    });
  });

  describe('given "a" as input A and "b" as input B', () => {
    const inputA = 'a';
    const inputB = 'b';

    describe('when requesting', () => {
      /** @type {import('fastify').FastifyReply} */
      let response;

      beforeAll(async () => {
        response = await fastify.inject({
          method: 'POST',
          url: '/math',
          payload: {
            inputA,
            inputB,
          },
        });
      });

      test('then status should be 400', () => {
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
