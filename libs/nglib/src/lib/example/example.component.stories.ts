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
  args: {}
};


export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/example works!/gi)).toBeTruthy();
  },
};
