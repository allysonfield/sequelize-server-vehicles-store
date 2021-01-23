module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "no-plusplus": "off",
    "no-restricted-globals": "off",
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "no-undef": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    radix: "off",
    "no-nested-ternary": "off",
    "no-empty": "off",
    "no-await-in-loop": "off",
  },
};
