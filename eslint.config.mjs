import { defineConfig } from "eslint/config";

import { eslintPreset, variableNaming } from "./eslint.js";

// The package lints with the preset it publishes.
export default defineConfig(
  ...eslintPreset,
  // tsc checks these for undefined names, as typescript-eslint leaves it to tsc in .ts files.
  { files: ["{docLint,lintDocs}.js"], rules: { "no-undef": "off" } },
  // Test helpers keep bare T, K and V.
  {
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/naming-convention": ["error", variableNaming],
    },
  },
);
