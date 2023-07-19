import type { Meta, StoryObj } from '@storybook/angular';
import { ExampleComponent } from './example.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ExampleComponent> = {
  component: ExampleComponent,
  title: 'ExampleComponent',
};
export default meta;
type Story = StoryObj<ExampleComponent>;

export const Primary = {
  args: {
    title: 'My Example Component',
  },
};

export const Heading: Story = {
  args: {
    title: 'My Example Component',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/My Example Component works!/gi)).toBeTruthy();
  },
};
