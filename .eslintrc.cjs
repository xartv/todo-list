module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:i18next/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'prettier', 'i18next'],
  rules: {
    'prettier/prettier': 1,
    'react-refresh/only-export-components': 'warn',
    'import/no-unresolved': 2,
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'app/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'widgets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'entities/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './*.module.scss',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.css',
            group: 'index',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': [
      1,
      {
        functions: false,
      },
    ],
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/display-name': 1,
    'no-console': [
      2,
      {
        allow: ['error'],
      },
    ],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-else-return': 0,
    'no-inner-declarations': 2,
    'no-lonely-if': 2,
    'no-unsafe-optional-chaining': 1,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'one-var': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-promise-reject-errors': 2,
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 0,
      },
    },
  ],
};
