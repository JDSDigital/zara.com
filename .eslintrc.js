module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
    'standard-with-typescript'
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'react/react-in-jsx-scope': 0
  }
}
