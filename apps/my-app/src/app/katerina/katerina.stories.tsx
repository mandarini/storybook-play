import type { Meta, StoryObj } from '@storybook/react';
import { Katerina } from './katerina';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Katerina> = {
  component: Katerina,
  title: 'Katerina',
};
export default meta;
type Story = StoryObj<typeof Katerina>;

export const Primary = {
  args: {},
};
export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Katerina!/gi)).toBeTruthy();
  },
};
