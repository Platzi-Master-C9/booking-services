jest.mock('../src/utils/logger', () => ({
  __esModule: true,
  Logger: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

jest.mock('mongoose', () => ({
  createConnection: jest.fn().mockImplementation(() => Promise.resolve()),
  Connection: jest.fn(),
}));
