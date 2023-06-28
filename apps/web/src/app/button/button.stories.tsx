import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonClicked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("You've clicked me 0 times");
    userEvent.click(button);
    await expect(canvas.getByText("You've clicked me 1 times")).toBeDefined();
  },
};
