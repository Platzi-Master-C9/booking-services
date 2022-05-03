module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/__tests__/testUtils.js',
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'text-summary',
    'lcov',
  ],
  // The paths to modules that run some code to configure or set up the
  // testing environment before each test
  setupFiles: [
    '<rootDir>/__tests__/setupTest.js',
  ],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
  ],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
