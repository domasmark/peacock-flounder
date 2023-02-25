import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';

export default {
  title: 'My components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   placeholder: 'bananai',
};