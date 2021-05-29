const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", path.join(__dirname, "src"), "shared"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  snapshotSerializers: ["jest-emotion"]
};
