import type { Meta, StoryObj } from '@storybook/react';
import { SampleText } from './sample-text';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
const meta: Meta<typeof SampleText> = {
  component: SampleText,
  title: 'SampleText',
};
export default meta;
type Story = StoryObj<typeof SampleText>;

export const Primary = {
  args: {
    content: 'Katerina',
  },
};

export const NewText: Story = {
  args: {
    content: 'Some other text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Some other text/gi)).toBeTruthy();
  },
};
