const js = require("@eslint/js");
const globals = require("globals");
const jestPlugin = require("eslint-plugin-jest");

module.exports = [
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ignores: [
      "dist/**",
      "node_modules/**",
    ],
    files: ["/*.test.js"],
    plugins: { jest: jestPlugin },
    extends: ["plugin:jest/recommended"],
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
  },
];
