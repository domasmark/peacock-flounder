import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../src/components/Label';
import Input from '../src/components/Input';

export default {
   title: 'My components/Label',
   component: Label,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   label: 'It works!',
   children: <Input/>,
};