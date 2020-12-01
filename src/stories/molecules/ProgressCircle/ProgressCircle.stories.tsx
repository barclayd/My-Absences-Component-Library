import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProgressCircle, ProgressCircleProps } from './ProgresCircle';

export default {
  title: 'Molecules/Progress Circle',
  component: ProgressCircle,
} as Meta;

const Template: Story<ProgressCircleProps> = (args) => (
  <ProgressCircle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  background: 'pink',
  fontSize: '18px',
  text: 'DB',
  size: '50px',
  color: 'white',
};
