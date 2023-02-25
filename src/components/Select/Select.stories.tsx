import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Select';
import Select from './Select';

export default {
  title: 'My components/Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   placeholder: 'bananai',
};