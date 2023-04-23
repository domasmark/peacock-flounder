import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack, { StackProps } from '../src/components/Stack/Stack';
import Grid, {GridProps} from '../src/components/Grid/Grid';
import Text from '../src/components/Text';

export default {
  title: 'Components/Grid',
  component: Grid,
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
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: GridProps) => <Grid {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  areas:[
    ['header', 'header'],
    ['sidebar', 'main'],
    ['sidebar', 'main'],
  ],
  rows:"auto 1fr 1fr",
  cols:"1fr 1fr",
  children: 
  <>
    <Stack variant='card' wFull area='header' justifyContent='center' border={{bottom:true}}>Header</Stack>
    <Stack variant='card' hFull wMin='240px' justifyContent='center' border={{right:true}} alignItems='center' area='sidebar'>Sidebar</Stack>
    <Stack area='main' wFull hFull alignItems='center'>Main</Stack>
  </>,
};