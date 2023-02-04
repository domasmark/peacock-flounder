import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstExample = Template.bind({});
FirstExample.args = {
  label: 'First example',
  icon: <>icon</>,
  selected: false,
};

export const SecondExmplae = Template.bind({});
SecondExmplae.args = {
  label: 'Second example',
};
