import globals from "globals";
import js from "@eslint/js";
import airbnb from "eslint-config-airbnb-base";
import prettier from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-n";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  airbnb,
  prettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    },
    plugins: {
      n: nodePlugin,
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error",
      "spaced-comment": "off",
      "no-console": "warn",
      "consistent-return": "off",
      "func-names": "off",
      "object-shorthand": "off",
      "no-process-exit": "off",
      "no-param-reassign": "off",
      "no-return-await": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "off",
      "prefer-destructuring": ["error", { object: true, array: false }],
      "no-unused-vars": ["error", { argsIgnorePattern: "req|res|next|val" }]
    }
  }
];
