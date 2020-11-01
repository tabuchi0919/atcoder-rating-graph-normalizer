module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": [2, { extensions: [".ts", ".tsx"] }],
    "import/no-namespace": 2,
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "no-unused-expressions": [2, { allowShortCircuit: true }],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/jsx-max-depth": [2, { max: 5 }],
    "react/jsx-sort-props": 2,
    "react/prop-types": 0,
    "arrow-body-style": [2, "as-needed"],
    "func-style": [2, "expression"],
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/explicit-function-return-type": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/typedef": 2,
    "@typescript-eslint/no-non-null-assertion": 2,
    "@typescript-eslint/no-unsafe-call": 2,
    "@typescript-eslint/no-unsafe-member-access": 2,
    "@typescript-eslint/no-unsafe-return": 2,
    "@typescript-eslint/consistent-type-assertions": [
      2,
      { assertionStyle: "never" },
    ],
    "no-restricted-syntax": [
      2,
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums.",
      },
      {
        selector: "TSInterfaceDeclaration",
        message: "Prefer types to interfaces.",
      },
    ],
  },
  overrides: [
    {
      files: ["src/apis/*"],
      rules: {
        "@typescript-eslint/consistent-type-assertions": [
          2,
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: { extensions: [".js", ".ts", ".tsx"] },
    },
  },
};
