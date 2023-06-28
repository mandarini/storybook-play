import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonClicked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(canvas.getByRole('button').innerText).toBe(
      "You've clicked me 1 times"
    );
  },
};
