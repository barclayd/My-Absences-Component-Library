import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select, SelectProps } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: ['Annual leave', 'Sickness', 'Paid leave'],
  placeholder: 'Search absence type',
  onClick: (option) => {
    console.log(option);
  },
};
