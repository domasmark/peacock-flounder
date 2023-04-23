import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const TextList = () => {
  return (
      <div>
         <h1 className="text-title-largest">Largest title</h1>
         <h2 className="text-title-larger">Larger title</h2>
         <h3 className="text-title-large">Large title</h3>
         <h4 className="text-title">Default title</h4>
         <h5 className="text-title-small">Small title</h5>
         <h6 className="text-title-tiny">Tiny title</h6>
         <p className="text-base">Body text</p>
         <p className="text-sm">Small body text</p>
      </div>
  );
};

export default {
  component: TextList,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextList>;

const Template: ComponentStory<typeof TextList> = (args) => <TextList />;

export const Typography = Template.bind({});
Typography.args = {};