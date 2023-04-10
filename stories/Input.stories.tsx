import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../src/components/Input/Input';

export default {
  title: 'My components/Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   placeholder: 'Placeholder...',
   type: 'text',
};