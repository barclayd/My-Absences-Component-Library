import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  AbsenceRecord,
  AbsenceRecordProps,
  AbsenceStatus,
} from './AbsenceRecord';
import styled from 'styled-components';

export default {
  title: 'Organisms/Absence Record',
  component: AbsenceRecord,
} as Meta;

const Background = styled.div`
  height: 100%;
  width: 70%;
  background: #eeeeee;
`;

const Template: Story<AbsenceRecordProps> = (args) => (
  <Background>
    <AbsenceRecord {...args} />
  </Background>
);

export const Primary = Template.bind({});
const now = new Date();
const threeDaysAgo = new Date(now.setDate(now.getDate() - 3)).toISOString();
const threeWeeksAgo = new Date(now.setDate(now.getDate() - 21)).toISOString();
Primary.args = {
  startDate: threeDaysAgo,
  endDate: new Date().toISOString(),
  approvalDate: threeWeeksAgo,
  status: AbsenceStatus.pending,
  name: 'Annual leave days',
};
