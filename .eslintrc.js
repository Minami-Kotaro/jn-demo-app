module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "camelcase": [{ properties: "never" }],
    "no-console": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
        },
      },
    ],
    "unicorn/number-literal-case": "off",
  },
}
