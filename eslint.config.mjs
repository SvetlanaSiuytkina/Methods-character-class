import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default ([
  {
    files: ["/*.{js,mjs,cjs}"],
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
      ...globals.browser, 
      ...globals.node,
      }
    },
  },

  {
    files: ["/*.test.js"],
    plugins: { jest: jestPlugin },
    extends: ["plugin:jest/recommended"],
    languageOptions: {
      globals: {
      ...jestPlugin.environments.globals.globals,
      }
    },
  },
]);