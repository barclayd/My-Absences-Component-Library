import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DateCircle, DateCircleProps } from './DateCircle';

export default {
  title: 'Molecules/Date Circle',
  component: DateCircle,
} as Meta;

const Template: Story<DateCircleProps> = (args) => <DateCircle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: 'pink',
  fontSize: '25px',
  fontWeight: 600,
  size: '57px',
  color: 'white',
  date: new Date().toISOString(),
};
