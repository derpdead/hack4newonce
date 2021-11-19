module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
    plugins: ['import', 'unused-imports', 'modules-newline'],
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended', // TypeScript rules
                'plugin:react/recommended', // React rules
                'plugin:react-hooks/recommended', // React hooks rules
                'plugin:jsx-a11y/recommended', // Accessibility rules
            ],
            rules: {
                'object-curly-newline': [
                    'error',
                    {
                        minProperties: 2,
                    },
                ],
                'array-bracket-newline': [
                    'error',
                    {
                        minItems: 2,
                    },
                ],
                'no-empty-pattern': 'off',
                'modules-newline/import-declaration-newline': 'error',
                'modules-newline/export-declaration-newline': 'error',
                "object-property-newline": [
                    'error',
                    {
                        allowMultiplePropertiesPerLine: false,
                    },
                ],
                "key-spacing": ["error", { "mode": "strict" }],
                "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
                "react/react-in-jsx-scope": "off",
                "import/first": "warn",
                "import/newline-after-import": "warn",
                "import/no-duplicates": "warn",
                "import/order": [
                    "error",
                    {
                        "groups": ["builtin", "external", "internal"],
                        "pathGroups": [
                            {
                                "pattern": "react",
                                "group": "external",
                                "position": "before"
                            }
                        ],
                        "pathGroupsExcludedImportTypes": ["react"],
                        "newlines-between": "always",
                        "alphabetize": {
                            "order": "asc",
                            "caseInsensitive": true
                        }
                    }
                ],
                "comma-dangle": ["error", "always-multiline"],
                "semi": "off",
                "@typescript-eslint/semi": ["error"],
                "react/jsx-max-props-per-line": [1, {
                    "when": "always"
                }],
                "@typescript-eslint/member-delimiter-style": ["error", {
                    "multiline": {
                        "delimiter": "semi",
                        "requireLast": true
                    },
                    "singleline": {
                        "delimiter": "semi",
                        "requireLast": false
                    }
                }],
                "react/jsx-first-prop-new-line": [1, "multiline"],
                "react/jsx-closing-bracket-location": [1, "after-props"],
                "indent": ["error", 4],
                "object-curly-spacing": ["error", "always"],
                "@typescript-eslint/no-empty-function": "warn",
                "jsx-a11y/no-noninteractive-element-interactions": "warn",
                "@typescript-eslint/no-empty-interface": "warn",
                "jsx-a11y/no-static-element-interactions": "warn",
                "jsx-a11y/click-events-have-key-events": "warn",
                "@typescript-eslint/ban-types": "warn",
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "warn",
                "react/prop-types": "off",
                "react/self-closing-comp": ["error", {
                    "component": true,
                    "html": true
                }],
                "no-multiple-empty-lines": ["warn", { "max": 1 }],
                "jsx-quotes": ["warn", "prefer-single"],
                "quote-props": ["warn", "as-needed"],
                "quotes": ["warn", "single"],
                "eqeqeq": "warn",
                "prefer-template": "warn",
                "no-multi-spaces": "warn",
                "no-mixed-spaces-and-tabs": "warn",
                "no-nested-ternary": "warn",
                "no-undef": "warn",
                "no-regex-spaces": "warn",
                "no-useless-escape": "warn",
                "keyword-spacing": ["warn", { "before": true }],
                "no-prototype-builtins": "warn",
                "no-dupe-keys": "warn",
                "no-unused-vars": "off",
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                    "warn",
                    { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
                ],
                "react/no-find-dom-node": "warn",
                "react/no-unescaped-entities": "warn",
                "react/no-deprecated": "warn",
                "react/display-name": "warn",
                "react/jsx-no-target-blank": "warn",
                "react/jsx-no-undef": "warn",
                "react/jsx-tag-spacing": ["warn", { "beforeSelfClosing": "always" }]
            },
        },
    ],
}

