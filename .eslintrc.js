module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
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
    '@typescript-eslint/consistent-type-definitions': 0
  }
}
