const base = require('@polkadot/dev-react/config/eslint');

// add override for any (a metric ton of them, initial conversion)
module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: ['./tsconfig.json']
  },
  rules: {
    ...base.rules,
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  plugins: ['prettier'],
  extends: ['prettier']
};
