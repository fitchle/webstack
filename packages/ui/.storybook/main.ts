import type { StorybookConfig } from "@storybook/react-vite";
import '@storybook/addon-console';
import { setConsoleOptions } from "@storybook/addon-console";

const panelExclude = setConsoleOptions({
}).panelExclude as any;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-actions",
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
