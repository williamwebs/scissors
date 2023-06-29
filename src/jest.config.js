module.exports = {
  preset: "jest-preset-vite",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
