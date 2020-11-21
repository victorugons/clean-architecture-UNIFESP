/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  roots:['<rootDir>/src'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // The test environment that will be used for testing
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};