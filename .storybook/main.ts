import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],
  framework: "@storybook/react-vite",
  staticDirs: [join(__dirname, "../public")],
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": join(__dirname, "../src"),
        },
      },
    });
  },
};

export default config;
