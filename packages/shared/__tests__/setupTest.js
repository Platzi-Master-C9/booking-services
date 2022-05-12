jest.mock('@booking-services/shared', () => ({
  __esModule: true,
  Logger: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

// TODO add packages which use mongoose
const packagesUsingMongoose = [
  '@booking-services/messages',
];

// TODO add packages name when we create a new one
const packages = [
  '@booking-services/user-account',
  '@booking-services/places',
  '@booking-services/math',
  '@booking-services/shared',
  '@booking-services/api-gateway',
  '@booking-services/booking',
  '@booking-services/search-engine',
  '@booking-services/data-monitoring',
  '@booking-services/geolocation',
  '@booking-services/notification-system',
  '@booking-services/admin-panel',
  '@booking-services/messages',
];

// TODO add preffixes use to connect to mongoose
const preffixes = [
  'messages',
];

module.exports = {
  packages,
  packagesUsingMongoose,
  preffixes,
};
