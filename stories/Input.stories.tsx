import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from '../src/components/Input/Input';

export default {
  title: 'Components/Input',
  component: InputComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = {
   placeholder: 'Placeholder...',
   type: 'text',
};