const mapper = require('jest-module-name-mapper')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: mapper.default(),
  moduleDirectories: ["node_modules", "src"]
}
