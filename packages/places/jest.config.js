//For a detailed explanation regarding each configuration property, visit:
//https://jestjs.io/docs/configuration

module.exports = {
    coverageProvider: 'v8',
    setupFiles: [
        '<rootDir>/__tests__/setupTest.js',
    ],
    testMatch: [
        '**/__tests__/**/*.test.[jt]s?(x)',
    ],
};
