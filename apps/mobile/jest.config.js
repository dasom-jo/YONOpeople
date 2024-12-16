const base = require("../../jest.config");

module.exports = {
  ...base,
  displayName: "web",
  testMatch: ["<rootDir>/__tests__/**/*.test.tsx"],
};
