import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FilterBox, FilterBoxProps } from './FilterBox';
import styled from 'styled-components';

export default {
  title: 'Organisms/Filter Box',
  component: FilterBox,
} as Meta;

const Background = styled.div`
  height: 100%;
  width: 70%;
  background: #eeeeee;
`;

const Template: Story<FilterBoxProps> = (args) => (
  <Background>
    <FilterBox {...args} />
  </Background>
);

export const Primary = Template.bind({});
Primary.args = {
  statusOptions: ['  All  ', 'Pending', 'Approved', ' Taken '],
  leaveTypes: ['Paid leave', 'Sickness', 'Annual leave'],
};
