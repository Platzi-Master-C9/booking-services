// External dependencies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const {
  preffixes,
  packagesUsingMongoose,
  packages,
} = require('../../setupTest');
const createMongoConnection = require('../../../src/drivers/mongodb/create-connection');

const randomIndexValid = Math.floor(Math.random() * preffixes.length);
const randomIndexInvalid = Math.floor(Math.random() * packagesUsingMongoose.length);

describe('driver: createConnection', () => {
  describe('given an invalid package name', () => {
    describe('when we get mongo credentials', () => {
      test('then should return error', () => {
        expect(() => createMongoConnection(null).toThrow());
      });
    });
  });

  describe('given a string which is not a valid package name', () => {
    describe('when that string is env identifier', () => {
      test('then should return connection object', () => {
        const connection = createMongoConnection(preffixes[randomIndexValid]);
        connection.close();
        expect(typeof connection).toBe('object');
      });
    });
    describe('when that string is not a env identifier', () => {
      test('then should return error', () => {
        expect(() => createMongoConnection(faker.random.alphaNumeric(10)));
      });
    });
  });

  describe('given a valid package name', () => {
    describe('when that package use mongoose', () => {
      test('then should return connection object', () => {
        const connection = createMongoConnection(packagesUsingMongoose[randomIndexValid]);
        connection.close();
        expect(typeof connection).toBe('object');
      });
    });
    describe('when that package doesn\'nt use mongoose', () => {
      test('then should return error', () => {
        expect(() => createMongoConnection(packages[randomIndexInvalid]));
      });
    });
  });
});
