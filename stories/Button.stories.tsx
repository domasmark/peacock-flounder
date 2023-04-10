import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../src/components/Button/Button';
import { IconChevronDown, IconGithub, IconMore, IconRemove } from '../src/components/Icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'My components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{
                    margin: '6em',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
  style: 'light',
  icon: <IconChevronDown/>,
  selected: false,
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'More Actions',
  helpText: 'Click to see options',
  labelPlacement: 'tooltip',
  style: 'light',
  icon: <IconMore/>,
  selected: false,
};

export const Thicc = Template.bind({});
Thicc.args = {
  label: 'Github',
  helpText: 'Go to view source',
  labelPlacement: 'end',
  style: 'light',
  icon: <IconGithub/>,
  selected: false,
};