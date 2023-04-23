import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from '../src/components/TextArea/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   placeholder: 'Placeholder...',
};