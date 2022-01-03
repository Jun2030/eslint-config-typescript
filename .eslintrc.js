"use strict";

module.exports = {
  root: true,
  plugins: ['node'],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
