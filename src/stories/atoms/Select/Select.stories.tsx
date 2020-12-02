import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select, SelectProps } from './Select';
import { AbsenceStatus } from '../../organism/AbsenceRecord';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [AbsenceStatus.taken, AbsenceStatus.pending, AbsenceStatus.approved],
  placeholder: 'Search absence type',
  onClick: (option) => {
    console.log(option);
  },
};
