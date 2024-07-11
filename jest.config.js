/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  resolver: "<rootDir>/mjs-resolver.ts",
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx|mts|mjs)?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
    "^.+\\.(js|jsx|mjs|cjs)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mts", "cts", "mjs", "cjs"],
  testMatch: ["**/*.test.mts", "**/*.test.ts"],
};
