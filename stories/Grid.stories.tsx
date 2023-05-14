import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stack from '../src/components/Stack/Stack';
import GridComponent, {GridProps} from '../src/components/Grid/Grid';

export default {
  title: 'Components/Grid',
  component: GridComponent,
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
} as ComponentMeta<typeof GridComponent>;

const Template: ComponentStory<typeof GridComponent> = (args: GridProps) => <GridComponent {...args} />;

export const Grid = Template.bind({});
Grid.args = {
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