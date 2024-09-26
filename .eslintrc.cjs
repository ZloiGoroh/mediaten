module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { 'avoidEscape': true }]
  }
}