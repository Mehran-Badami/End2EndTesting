module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard-with-typescript","plugin:cypress/recommended","eslint-config-prettier","prettier"],
    "plugins": ["cypress","prettier","eslint-plugin-prettier"],
    "overrides": [
        {
            "env": {
                "node": true,
                "cypress/globals": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error",
        "prettier/prettier": "error"
    }
}
