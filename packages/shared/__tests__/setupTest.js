require('mongoose');

jest.mock('../src/drivers/mongodb/connection-info', () => ({
  showConnectionInfo: jest.fn().mockImplementation(),
}));

jest.mock('../src/drivers/mongodb/create-connection', () => ({
  createConnection: jest.fn().mockImplementation(() => Promise.resolve()),
}));

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
