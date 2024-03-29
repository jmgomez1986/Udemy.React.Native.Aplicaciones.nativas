module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'react-native/no-inline-styles': 'off',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
