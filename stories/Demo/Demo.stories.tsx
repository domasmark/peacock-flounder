import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Demo from './Demo';

export default {
  title: 'App',
  component: Demo,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', }}>
        <div  style={{ height: '100%' }} >
          <Story />
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const App = Template.bind({});
App.args = {};