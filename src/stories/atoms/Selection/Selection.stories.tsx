import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SelectionProps, Selection } from './Selection';

export default {
  title: 'Atoms/Selection',
  component: Selection,
} as Meta;

const Template: Story<SelectionProps> = (args) => <Selection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: ['  All  ', 'Pending', 'Approved', ' Taken '],
  onClick: (name) => {
    console.log(name);
  },
};

export const ActiveOption = Template.bind({});
ActiveOption.args = {
  options: ['All', 'Pending', 'Approved', 'Taken'],
  activeOption: 'Taken',
  onClick: (name) => {
    console.log(name);
  },
};
