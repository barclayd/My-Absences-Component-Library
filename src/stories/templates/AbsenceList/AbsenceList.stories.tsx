import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AbsenceList, AbsenceListProps } from './AbsenceList';
import styled from 'styled-components';
import {
  Absence,
  AbsenceStatus,
} from '../../organism/AbsenceRecord/AbsenceRecord';

export default {
  title: 'Templates/Absence List',
  component: AbsenceList,
} as Meta;

const Background = styled.div`
  height: 100%;
  width: 70%;
`;

const Template: Story<AbsenceListProps> = (args) => (
  <Background>
    <AbsenceList {...args} />
  </Background>
);

const generateAbsence = (
  daysSinceApproval: number,
  daysToEnd: number,
  daysSinceStart: number,
  status: AbsenceStatus,
  name: string,
): Absence => {
  const now = new Date();
  return {
    startDate: new Date(
      now.setDate(now.getDate() - daysSinceStart),
    ).toISOString(),
    endDate: new Date(now.setDate(now.getDate() + daysToEnd)).toISOString(),
    approvalDate: new Date(
      now.setDate(now.getDate() - daysSinceApproval),
    ).toISOString(),
    status,
    name,
  };
};

export const Primary = Template.bind({});
const sickness = generateAbsence(5, 5, 3, AbsenceStatus.pending, 'Sickness');
const annualLeave = generateAbsence(
  21,
  3,
  12,
  AbsenceStatus.approved,
  'Annual leave days',
);
const paidLeave = generateAbsence(
  4,
  15,
  3,
  AbsenceStatus.taken,
  'Special leave paid',
);
export const definedAbsences = [sickness, annualLeave, paidLeave];
Primary.args = {
  absences: [sickness, annualLeave, paidLeave],
};
