const THIRD_PARTY_MODULES_ORDER = [
  '^react$',
  '^react-dom$',
  '^react-redux$',
  '^react-router-dom$',
  '^react-use$',
  '^react-device-detect$',
  '^connected-react-router$',
  '^lodash$',
  '<THIRD_PARTY_MODULES>',
  '^classnames$',
  '',
];

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  printWidth: 120,
  proseWrap: 'preserve',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};
