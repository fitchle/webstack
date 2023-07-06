import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import './tailwind.css'
import type { Preview } from "@storybook/react";

const panelExclude = setConsoleOptions({
}).panelExclude as any;

const preview: Preview = {
  decorators: [(storyFn, context) => withConsole({panelExclude: [...panelExclude, "Warning! withConsole doesn't support @storybook/undefined. Use setConsoleOptions instead"]})(storyFn)(context)],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
