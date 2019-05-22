/*! .prettierrc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://prettier.io) */

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 4,
        printWidth: 80
      }
    }
  ]
}
