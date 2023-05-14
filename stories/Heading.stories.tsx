import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeadingComponent from '../src/components/Heading';

export default {
   title: 'Components/Heading',
   component: HeadingComponent,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof HeadingComponent>;

const Template: ComponentStory<typeof HeadingComponent> = (args) => <HeadingComponent {...args} />;

export const Heading = Template.bind({});
Heading.args = {
   children: "Heading",
};