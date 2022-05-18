// Internal dependencies
const getMongoCredentials = require('../../../src/drivers/mongodb/get-mongo-credentials');

// Mocks
jest.mock('dotenv', () => ({
  config: jest.fn(),
}));

describe('getMongoCredentials', () => {
  describe('given "PACKAGE-NAME" as prefix', () => {
    const prefix = 'PACKAGE-NAME';

    describe('when "PACKAGE_NAME_MONGO_URI" is not defined in the environment', () => {
      beforeEach(() => {
        delete process.env.PACKAGE_NAME_MONGO_URI;
      });

      it('then should throw an error', () => {
        expect(() => getMongoCredentials(prefix)).toThrowError(
          'Could not find PACKAGE_NAME_MONGO_URI in your environment',
        );
      });
    });

    describe('when "PACKAGE_NAME_MONGO_URI" is defined in the environment', () => {
      let output;
      beforeAll(() => {
        process.env.PACKAGE_NAME_MONGO_URI = 'mongodb://localhost:27017/test?authSource=test';
        output = getMongoCredentials(prefix);
      });

      afterAll(() => {
        delete process.env.PACKAGE_NAME_MONGO_URI;
      });

      it('then should be a string', () => {
        expect(typeof output).toBe('string');
      });

      it('then should return the value of "PACKAGE_NAME_MONGO_URI"', () => {
        expect(output).toBe('mongodb://localhost:27017/test?authSource=test');
      });
    });
  });

  describe('given undefined as prefix', () => {
    describe('when executed', () => {
      it('then should throw an error', () => {
        expect(() => getMongoCredentials()).toThrowError();
      });
    });
  });
});
