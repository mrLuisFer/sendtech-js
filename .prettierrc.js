module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  arrowParens: 'always',
  jsxSingleQuote: true,
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  trailingComma: 'none',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2
      }
    }
  ]
}
