import type { StorybookConfig } from "@storybook/react-vite";
import "@storybook/addon-console";
import path from "path";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",

    "storybook-tailwind-dark-mode",
    "storybook-addon-pseudo-states",
    "storybook-addon-performance",
    "@whitespace/storybook-addon-html",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          // test: [/\.stories\.tsx?$/],
          include: [path.resolve(__dirname, "../components")], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: false,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
