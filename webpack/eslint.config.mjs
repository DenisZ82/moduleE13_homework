import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  languageOptions: {
    globals: {
      browser: globals.browser,
    },
  },
  plugins: {
    recommended: pluginJs.configs.recommended,
  },
  rules: {
    semi: "error"
  },
};

// export default [
//   {
//     files: ["src/**/*.js"],
//     ignores: ["**/*.config.js"],
//     rules: {
//       semi: "error"
//     }
//   }
// ];