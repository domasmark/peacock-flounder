import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../src/components/Button/Button';
import { IconChevronDown, IconGithub, IconMore, IconRemove } from '../src/components/Icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  labelPlacement: 'start',
  selected: false,
};

export const Icon_text = Template.bind({});
Icon_text.args = {
  label: 'Delete',
  labelPlacement: 'end',
  icon: <IconRemove/>,
  selected: false,
};

export const Text_icon = Template.bind({});
Text_icon.args = {
  label: 'More Actions',
  labelPlacement: 'start',
  variant: 'light',
  icon: <IconChevronDown/>,
  selected: false,
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'More Actions',
  helpText: 'Click to see options',
  labelPlacement: 'tooltip',
  variant: 'light',
  icon: <IconMore/>,
  selected: false,
};

export const IconTextDesc = Template.bind({});
IconTextDesc.args = {
  label: 'Github',
  helpText: 'Explore the source code',
  labelPlacement: 'end',
  variant: 'light',
  icon: <IconGithub/>,
  selected: false,
};