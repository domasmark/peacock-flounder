import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../src/components/Heading';

export default {
   title: 'Components/Heading',
   component: Heading,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   children: "Heading",
};