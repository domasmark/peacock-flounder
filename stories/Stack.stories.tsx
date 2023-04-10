import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack, { StackProps } from '../src/components/Stack/Stack';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export default {
  title: 'My components/Stack',
  component: Stack,
  argTypes: {
    style: { control: 'radio' },
    alignItems: {control: 'select'},
    as: {control: 'text'},
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
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
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
  style: 'board',
  alignItems: 'flex-start',
  border: 'none',
  wFull: false,
  hFull: false,
  vertical: false,
};