module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'google', // order matters here: google should come first before prettier
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  rules: {},
};
