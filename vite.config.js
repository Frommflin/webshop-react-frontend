import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    storybookTest({
      configDir: path.join(dirname, ".storybook"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
      "@sb": path.resolve(dirname, "./.storybook"),
    },
  },
  test: {
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
          setupFiles: ["tests/setup.js"],
        },
      },
      {
        test: {
          name: "storybook",
          environment: "jsdom",
          setupFiles: [".storybook/vitest.setup.js"],
          include: [
            "src/**/*.stories.@(js|jsx|ts|tsx)",
            "src/**/*.{stories.test,stories.spec}.{js,jsx,ts,tsx}",
          ],
        },
      },
    ],
  },
});
