/* eslint-disable no-undef */
process.env = {
  ...process.env,
  VITE_MOCK_RESPONSE_DELAY: "100",
  VITE_ROUTER_BASE_PATH: "/",
};

module.exports = {
  roots: ["<rootDir>/src/"],
  testEnvironment: "jsdom",
  resetMocks: true,
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverage: true,
  coverageDirectory: "jest-coverage",
  transform: {
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/assets/",
    "<rootDir>/src/mock/",
    "<rootDir>/src/testing/", 
    "index.ts",
  ],
};
