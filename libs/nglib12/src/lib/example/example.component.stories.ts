import { Meta } from '@storybook/angular';
import { ExampleComponent } from './example.component';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
} as Meta<ExampleComponent>;

export const Primary = {
  render: (args: ExampleComponent) => ({
    props: args,
  }),
  args: {},
};
