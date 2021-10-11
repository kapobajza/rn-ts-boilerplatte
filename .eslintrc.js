module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    jest: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)'],
    },
  ],
  rules: {
    'no-shadow': 'off',
    'no-undef-init': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'testing-library/prefer-screen-queries': 'off',
  },
  globals: {
    JSX: true,
  },
};
