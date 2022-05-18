// External dependencies
const mongoose = require('mongoose');

// Internal dependencies
const createMongoConnection = require('../../../src/drivers/mongodb/create-connection');
const { setupMongoEvents } = require('../../../src/drivers/mongodb/connection-info');

// Mocks
jest.mock('mongoose', () => ({
  createConnection: jest.fn(),
}));
jest.mock('../../../src/drivers/mongodb/get-mongo-credentials');
jest.mock('../../../src/drivers/mongodb/connection-info');

describe('createMongoConnection', () => {
  describe('given "PACKAGE-NAME" as prefix', () => {
    const prefix = 'PACKAGE-NAME';

    describe('when connection is successful', () => {
      test('then should return mongo instance', async () => {
        mongoose.createConnection.mockReturnValue('mongoose instance');

        expect(createMongoConnection(prefix)).toBe('mongoose instance');
        expect(mongoose.createConnection).toHaveBeenCalledTimes(1);
        expect(setupMongoEvents).toHaveBeenCalledWith('mongoose instance');
      });
    });
  });

  describe('given a non-string value as prefix', () => {
    const prefix = true;

    describe('when create connection', () => {
      test('then should return an error', async () => {
        expect(() => createMongoConnection(prefix)).toThrow('prefix should be a string');
      });
    });
  });
});
