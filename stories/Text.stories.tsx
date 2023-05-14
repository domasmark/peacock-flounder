import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '../src/components/Stack';
import TextComponent from '../src/components/Text';

export default {
   title: 'Components/Text',
   component: TextComponent,
   parameters: {
      layout: 'centered',
   },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof TextComponent> = (args) => <TextComponent {...args} />;

export const Text = Template.bind({});
Text.args = {
   children: "Text",
   as: 'div',
};