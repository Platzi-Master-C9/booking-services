// External dependencies
const MockModel = require('jest-mongoose-mock');

// Mocks
jest.mock('../../math/src/domains/math.js', () => new MockModel());

jest.mock('winston', () => ({
  createLogger: () => ({
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  }),
  transports: {
    Console: jest.fn(),
  },
  format: {
    json: jest.fn(),
  },
}));
