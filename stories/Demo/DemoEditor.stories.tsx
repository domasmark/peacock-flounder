import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DemoEditor from './DemoEditor';

export default {
  title: 'Demo/Editor',
  component: DemoEditor,
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
} as ComponentMeta<typeof DemoEditor>;

const Template: ComponentStory<typeof DemoEditor> = () => <DemoEditor />;

export const Editor = Template.bind({});
Editor.args = {};