import type { Meta, StoryObj } from "@storybook/react";

import { StorybookButton } from "./Button";

const meta: Meta<typeof StorybookButton> = {
  title: "Fitchle/Button",
  component: StorybookButton,
  parameters: {
    layout: "centered"
  },
};

export default meta;
type Story = StoryObj<typeof StorybookButton>;

export const ExampleStorybookButton: Story = { 
  args: { text: "Storybook", href: "http://localhost:6006" }
};
