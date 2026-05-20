const js = require("@eslint/js");
const globals = require("globals");
const jestPlugin = require("eslint-plugin-jest");

module.exports = [
  { 
    files: ["**/*.{js,mjs,cjs}"],
    ignores: [
      "dist/**",
      "node_modules/**",
    ],
    plugins: { js: js }, 
    extends: ["js.config.recommended"], 
    languageOptions: { 
      globals: Object.assign({}, globals.browser, globals.node),
    },
  },

  {
    files: ["**/*.test.js"],
    plugins: { jest: jestPlugin },
    extends: ["plugin:jest/recommended"],
    languageOptions: {
      globals: jestPlugin.environments.jest.globals,
    },
  },
];
