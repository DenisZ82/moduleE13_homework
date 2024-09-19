// import globals from "globals";
// import pluginJs from "@eslint/js";
import globals from "globals";
import js from "@eslint/js";

export default {
  languageOptions: {
    globals: globals.browser, // прямой доступ к глобальным переменным
  },
  extends: [js.configs.recommended],  // используйте extends для подключения рекомендованных конфигов
  rules: {
    // ваши правила
  },
};

// export default {
//   languageOptions: {
//     globals: {
//       browser: globals.browser,  // Убедитесь, что это корректная ссылка
//     },
//   },
//   plugins: {
//     recommended: pluginJs.configs.recommended,  // Убедитесь в правильности этого пути
//   },
//   rules: {
//     semi: "error"
//   },
// };

// export default {
//   rules: {
//     "semi": ["error", "always"],
//     "quotes": ["error", "double"]
//   }
// };