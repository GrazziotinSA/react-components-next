import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";

import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  globalIgnores(["dist/**", "storybook-static/**", "node_modules/**"]),
  ...tseslint.configs.recommended,
  ...storybook.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          trailingComma: "all",
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          endOfLine: "crlf",
        },
      ],
    },
  },
]);

export default eslintConfig;
