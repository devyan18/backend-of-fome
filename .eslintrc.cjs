module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "quotes": ["error", "double"],
    "quote-props": "off",
    "linebreak-style": "off",
    "func-names": "off",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "no-undef": "off",
  },
};
