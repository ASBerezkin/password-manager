module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'prettier' // Обязательно в конце, чтобы prettier переопределил форматирование
    ],
    rules: {
        // Дополнительные правила или переопределения
    }
}
