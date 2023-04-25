import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from "../src/components/Button";
import Tooltip from "../src/components/Tooltip/Tooltip";

const UncontrolledTooltip: React.FC = () => {
  return (
      <Tooltip label="Label" helpText='Helper text'>
        <Button variant='light' label='Hover me'/>
      </Tooltip>
  );
};

export default {
  title: 'Components/Tooltip',
  component: UncontrolledTooltip,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof UncontrolledTooltip>;

const Template: ComponentStory<typeof UncontrolledTooltip> = (args) => <UncontrolledTooltip {...args} />;

export const Plain = Template.bind({});