import React from 'react';
import { Status, StyledFilterBox, Toggle, Type } from './StyledFilterBox';
import { Selection } from '../../atoms/Selection/Selection';
import { Select } from '../../atoms/Select/Select';
import { Link } from '../../atoms/Link/Link';
import { Heading, HeadingStyle } from '../../atoms/Header/Heading';

export interface FilterBoxProps {
  /**
   * Absence options
   */
  statusOptions: string[];
  /**
   * Leave types
   */
  leaveTypes: string[];
  /**
   * onStatusChange handler
   */
  onStatusChange: (status: string) => void;
  /**
   * onTypeChange handler
   */
  onTypeChange: (type: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const FilterBox: React.FC<FilterBoxProps> = ({
  statusOptions,
  onStatusChange,
  onTypeChange,
  leaveTypes,
}) => (
  <StyledFilterBox>
    <Status>
      <Heading style={HeadingStyle.subheading} text="Status" color="#3C3B3B" />
      <Selection options={statusOptions} onClick={onStatusChange} />
    </Status>
    <Type>
      <Heading style={HeadingStyle.subheading} text="Type" color="#3C3B3B" />
      <Select
        options={leaveTypes}
        placeholder="Search absence type"
        onClick={onTypeChange}
      />
    </Type>
    <Toggle>
      <Link text="Clear filters" color="#3C3B3B" />
    </Toggle>
  </StyledFilterBox>
);
