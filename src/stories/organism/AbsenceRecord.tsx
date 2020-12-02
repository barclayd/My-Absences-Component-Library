import React from 'react';
import {
  DateCircleContainer,
  DateContainer,
  IconContainer,
  Line,
  RecordContainer,
  Status,
  StyledContainer,
} from './StyledAbsenceRecord';
import { DateCircle } from '../molecules/DateCircle/DateCircle';
import { Icon, RegisteredIcon } from '../atoms/Icon/Icon';

export enum AbsenceStatus {
  pending = 'pending',
  approved = 'approved',
  taken = 'taken',
}

export interface AbsenceRecordProps {
  /**
   * Date for start of absence
   */
  startDate: string;
  /**
   * Date for start of absence
   */
  endDate: string;
  /**
   * Status for absence
   */
  status: AbsenceStatus;
}

export const AbsenceRecord: React.FC<AbsenceRecordProps> = ({ startDate }) => {
  return (
    <StyledContainer>
      <DateCircleContainer>
        <DateCircle
          background="pink"
          date={startDate}
          size="57px"
          color="#ffffff"
          fontWeight={600}
          fontSize="25px"
        />
      </DateCircleContainer>
      <RecordContainer>Record goes here</RecordContainer>
      <DateContainer>Date will go here</DateContainer>
      <Line />
      <Status />
      <IconContainer>
        <Icon
          iconName={RegisteredIcon.approved}
          iconSize="22px"
          color="#000000"
        />
      </IconContainer>
    </StyledContainer>
  );
};
