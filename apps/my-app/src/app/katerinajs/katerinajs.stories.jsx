import Katerinajs from './katerinajs';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Katerinajs,
  title: 'Katerinajs',
};

export const Primary = {
  args: {},
};

export const Heading = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Katerinajs!/gi)).toBeTruthy();
  },
};
