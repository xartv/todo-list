module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "@typescript-eslint", "import"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "import/no-unresolved": 2,
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "import/order": [
      1,
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          { pattern: "src/app/**", group: "internal", position: "after" },
          { pattern: "src/pages/**", group: "internal", position: "after" },
          { pattern: "src/widgets/**", group: "internal", position: "after" },
          { pattern: "src/features/**", group: "internal", position: "after" },
          { pattern: "src/entities/**", group: "internal", position: "after" },
          { pattern: "src/shared/**", group: "internal", position: "after" },

          { pattern: "./*.module.scss", group: "index", position: "after" },
        ],
        "newlines-between": "always",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
  },
};
