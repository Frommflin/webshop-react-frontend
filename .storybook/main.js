import { mergeConfig } from "vite";
import path from "path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: { name: "@storybook/react-vite", options: {} },

  // Lägg till Vite-alias
  viteFinal: async (configBase) => {
    return mergeConfig(configBase, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@sb": path.resolve(__dirname, "../.storybook"),
        },
      },
    });
  },
};

export default config;
