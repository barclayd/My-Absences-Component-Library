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
  width: 100%;
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
Primary.args = {
  startDate: threeDaysAgo,
  endDate: now.toISOString(),
  status: AbsenceStatus.pending,
};
