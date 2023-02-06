import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledTooltip from './Tooltip.example';
import "../../css/global.scss";

export default {
  title: 'My components/Tooltip',
  component: UncontrolledTooltip,
} as ComponentMeta<typeof UncontrolledTooltip>;

const Template: ComponentStory<typeof UncontrolledTooltip> = (args) => <UncontrolledTooltip {...args} />;

export const FirstExample = Template.bind({});
FirstExample.args = {
  
};