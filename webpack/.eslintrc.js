module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "module",
              "ecmaVersion": "latest"
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
  }
}