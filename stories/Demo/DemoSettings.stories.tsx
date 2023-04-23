import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DemoSettings from './DemoSettings';

export default {
  title: 'Demo/Settings',
  component: DemoSettings,
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
} as ComponentMeta<typeof DemoSettings>;

const Template: ComponentStory<typeof DemoSettings> = () => <DemoSettings />;

export const Settings = Template.bind({});
Settings.args = {};