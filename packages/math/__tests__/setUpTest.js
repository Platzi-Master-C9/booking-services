// External dependencies
const MockModel = require('jest-mongoose-mock');

// Mock models
jest.mock('@booking-services/shared/src/utils/logger', () => ({
  MathModel: new MockModel(),
}));

jest.mock('..', () => ({
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
}));