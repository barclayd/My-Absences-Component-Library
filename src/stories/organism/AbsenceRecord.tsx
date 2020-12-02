import React from 'react';
import {
  DateCircleContainer,
  DateContainer,
  DateText,
  IconContainer,
  Line,
  RecordContainer,
  Status,
  StyledContainer,
} from './StyledAbsenceRecord';
import { DateCircle } from '../molecules/DateCircle/DateCircle';
import { Icon, RegisteredIcon } from '../atoms/Icon/Icon';
import { dayMap, monthMap } from '../../helpers';
import { Heading, HeadingStyle } from '../atoms/Header/Heading';
import { Text } from '../atoms/Text/Text';

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
   * Date for start of absence
   */
  approvalDate: string;
  /**
   * Status for absence
   */
  status: AbsenceStatus;
  /**
   * Name for absence
   */
  name: string;
}

const formatApprovalDate = (approvalDate: string): string => {
  const approvalDay = new Date(approvalDate);
  const weekday = dayMap.get(approvalDay.getDay());
  const dayInMonth = approvalDay.getDate();
  const monthAbbreviation = monthMap
    .get(approvalDay.getMonth())
    ?.substring(0, 3);
  return `${weekday} ${dayInMonth} ${monthAbbreviation}`;
};

const formatDateForTextString = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const dateSummary = (
  startDateString: string,
  endDateString: string,
): string => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const MILLISECONDS_IN_DAY = 86400000;
  const daysBetweenStartAndEnd = Math.round(
    (endDate.getTime() - startDate.getTime()) / MILLISECONDS_IN_DAY,
  );
  return `${formatDateForTextString(startDate)} to ${formatDateForTextString(
    endDate,
  )} | ${daysBetweenStartAndEnd} days`;
};

const colourMap = new Map<AbsenceStatus, string>([
  [AbsenceStatus.taken, '#DB9626'],
  [AbsenceStatus.approved, '#61B881'],
  [AbsenceStatus.pending, '#766287'],
]);

const iconMap = new Map<AbsenceStatus, RegisteredIcon>([
  [AbsenceStatus.taken, RegisteredIcon.check],
  [AbsenceStatus.approved, RegisteredIcon.check],
  [AbsenceStatus.pending, RegisteredIcon.sandtimer],
]);

export const AbsenceRecord: React.FC<AbsenceRecordProps> = ({
  startDate,
  endDate,
  approvalDate,
  name,
  status,
}) => {
  const approvalDay = formatApprovalDate(approvalDate);
  const icon = iconMap.get(status) ?? RegisteredIcon.sandtimer;
  const dateCircleBackgroundColour = colourMap.get(status) ?? '#DB9626';
  const summary = dateSummary(startDate, endDate);
  return (
    <StyledContainer>
      <DateCircleContainer>
        <DateCircle
          background={dateCircleBackgroundColour}
          date={startDate}
          size="57px"
          color="#ffffff"
          fontWeight={600}
          fontSize="25px"
        />
      </DateCircleContainer>
      <RecordContainer>
        <Heading style={HeadingStyle.subheading} text={name} color="#3C3B3B" />
        <Text text={summary} color="#838383" />
      </RecordContainer>
      <DateContainer>
        <DateText fontSize="11px" color="#6C6C6C">
          {approvalDay}
        </DateText>
      </DateContainer>
      <Line />
      <Status>
        <Icon iconName={icon} iconSize="22px" color="#6C6C6C" />
        <DateText fontSize="11px" color="#616161">
          {status}
        </DateText>
      </Status>
      <IconContainer>
        <Icon iconName={RegisteredIcon.arrow} iconSize="13px" color="#000000" />
      </IconContainer>
    </StyledContainer>
  );
};
