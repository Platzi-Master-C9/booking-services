// External dependencies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const createMongoConnection = require('../../../src/drivers/mongodb/create-connection');
const getMongoCredentials = require('../../../config/get-mongo-credentials');
const showConnectionInfo = require('../../../src/drivers/mongodb/connection-info');

const mockPrefix = faker.database.column();

process.env.TEST_MONGO_URI = faker.internet.url();
process.env.TEST_MONGO_USER = faker.internet.userName();
process.env.TEST_MONGO_PASSWORD = faker.internet.password();

describe('driver: createConnection', () => {
  describe('given an invalid peffix', () => {
    describe('when we get mongo credentials', () => {
      test('then should return error', () => {
        expect(() => createMongoConnection(mockPrefix).toThrow());
      });
    });
  });

  describe('given a prefix', () => {
    describe('when that prefix is env identifier', () => {
      test('then should return connection object', () => {
        const connection = createMongoConnection('test').mockImplementation();
        expect(getMongoCredentials).toHaveBeenCalled();
        expect(showConnectionInfo).toHaveBeenCalledWith(expect.anything());
        expect(typeof connection).toBe('object');
      });
    });
    describe('when that string is not a env identifier', () => {
      test('then should return error', () => {
        expect(() => createMongoConnection(faker.random.alphaNumeric(10)));
      });
    });
  });
});
