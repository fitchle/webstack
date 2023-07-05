/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@stackfitch/eslint-config"], // uses the config in `packages/config/eslint`
  parser: "@typescript-eslint/parser",
  rules: {
    "turbo/no-undeclared-env-vars": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./apps/*/tsconfig.json",
      "./packages/*/tsconfig.json",
      "./packages/**/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/web"],
    },
  },
};

module.exports = config;
