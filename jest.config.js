module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
};
