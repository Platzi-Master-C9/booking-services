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
    File: jest.fn(),
    Http: jest.fn(),
    Stream: jest.fn(),
  },
  format: {
    align: jest.fn(),
    cli: jest.fn(),
    colorize: jest.fn(),
    combine: jest.fn(),
    errors: jest.fn(),
    json: jest.fn(),
    label: jest.fn(),
    logstash: jest.fn(),
    metadata: jest.fn(),
    ms: jest.fn(),
    padLevels: jest.fn(),
    prettyPrint: jest.fn(),
    printf: jest.fn(),
    simple: jest.fn(),
    splat: jest.fn(),
    timestamp: jest.fn(),
    uncolorize: jest.fn(),
  },
}));

jest.mock('@booking-services/places', () => ({
  postPlace: jest.fn(),
  getPlaces: jest.fn(() => []),
  deletePlace: jest.fn((id) => {
    if (typeof id !== 'number' || id >= 1000) {
      throw new Error();
    }
  }),
}));

jest.mock('@booking-services/messages');

jest.mock('@booking-services/web-sockets');
