import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelComponent from '../src/components/Label';
import Input from '../src/components/Input';

export default {
   title: 'Components/Label',
   component: LabelComponent,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = (args) => <LabelComponent {...args} />;

export const Label = Template.bind({});
Label.args = {
   label: 'Label',
   description: 'Details about the input land here',
   helpText: 'Additional insructions or error message should be placed here',
   children: <Input/>,
};