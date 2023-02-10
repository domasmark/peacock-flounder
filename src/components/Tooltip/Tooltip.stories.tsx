import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledTooltip from './Tooltip.story.example';
import "../../css/global.scss";

export default {
  title: 'My components/Tooltip',
  component: UncontrolledTooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: '6em', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof UncontrolledTooltip>;

const Template: ComponentStory<typeof UncontrolledTooltip> = (args) => <UncontrolledTooltip {...args} />;

export const FirstExample = Template.bind({});
FirstExample.args = {
};