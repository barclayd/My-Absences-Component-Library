import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CircleProps, Circle } from './Circle';

export default {
  title: 'Atoms/Circle',
  component: Circle,
} as Meta;

const Template: Story<CircleProps> = (args) => <Circle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: 'pink',
  fontSize: '18px',
  text: 'DB',
  size: '50px',
  color: 'white',
};
