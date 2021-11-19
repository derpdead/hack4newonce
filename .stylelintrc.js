module.exports = {
    plugins: [
        "stylelint-scss"
    ],
    extends: "stylelint-config-standard",
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "indentation": "tab",
        "string-quotes": "single",
        "no-duplicate-at-import-rules": true
    }
}
