const rules = {
  off: 'off',
  warn: 'warn',
  error: 'error'
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    quotes: [rules.error, 'single'],
    eqeqeq: rules.error
  }
}
