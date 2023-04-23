import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack, { StackProps } from '../src/components/Stack/Stack';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    style: { control: 'radio' },
    alignItems: {control: 'select'},
    as: {control: 'text'},
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', }}>
        <div  style={{ height: '100%', padding: '2rem' }} >
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args: StackProps) => <Stack {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  children: 
    <>
      <Input/>
      <Input/>
      <Button label='Lengthy Button'/>
      <Button label='Button'/>
    </>,
  as: 'div',
  variant: 'slip',
  alignItems: 'flex-start',
  border: {bottom: true},
  wFull: false,
  hFull: false,
  vertical: false,
};