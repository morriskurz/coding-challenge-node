/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'mts',
    'cts',
    'mjs',
    'cjs',
  ],
  testMatch: ['**/*.test.mts'],
};