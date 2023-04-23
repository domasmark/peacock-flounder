import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '../src/components/Stack';
import Text from '../src/components/Text';

export default {
   title: 'My components/Text',
   component: Text,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Plain = Template.bind({});
Plain.args = {
   children: "Text",
   as: 'div',
};