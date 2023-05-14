import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextAreaComponent from '../src/components/TextArea/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextAreaComponent,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextAreaComponent>;

const Template: ComponentStory<typeof TextAreaComponent> = (args) => <TextAreaComponent {...args} />;

export const TextArea = Template.bind({});
TextArea.args = {
   placeholder: 'Placeholder...',
};