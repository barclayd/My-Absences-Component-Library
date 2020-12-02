import React from 'react';
import { StyledAbsenceList } from './StyledAbsenceList';

import { Absence, AbsenceRecord } from '../../organism/AbsenceRecord';

export interface AbsenceListProps {
  /**
   * Array of absences
   */
  absences: Absence[];
}

export const AbsenceList: React.FC<AbsenceListProps> = ({ absences }) => {
  const absencesList = absences.map(
    ({ startDate, endDate, approvalDate, name, status }) => (
      <AbsenceRecord
        startDate={startDate}
        endDate={endDate}
        approvalDate={approvalDate}
        status={status}
        name={name}
      />
    ),
  );
  return <StyledAbsenceList>{absencesList}</StyledAbsenceList>;
};
