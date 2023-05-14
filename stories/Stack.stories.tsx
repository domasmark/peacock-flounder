import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StackComponent, { StackProps } from '../src/components/Stack/Stack';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export default {
  title: 'Components/Stack',
  component: StackComponent,
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
} as ComponentMeta<typeof StackComponent>;

const Template: ComponentStory<typeof StackComponent> = (args: StackProps) => <StackComponent {...args} />;

export const Stack = Template.bind({});
Stack.args = {
  children: 
    <>
      <Input/>
      <Input/>
      <Input/>
      <Button label='Dismiss' variant='light'/>
      <Button label='Confirm'/>
    </>,
  as: 'div',
  variant: 'slip',
  alignItems: 'flex-start',
  border: {bottom: true},
  wFull: false,
  hFull: false,
  vertical: false,
};