// External dependencies
const MockModel = require('jest-mongoose-mock');

// Mock models
jest.mock('../src/domains/index.js', () => ({
  MathModel: new MockModel(),
}));

jest.mock('../src/utils/logger.js', () => ({
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
}));
