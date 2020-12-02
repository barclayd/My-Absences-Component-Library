import React from 'react';
import { SelectionOption, StyledSelection } from './StyledSelection';

export interface SelectionProps {
  /**
   * Options for selection
   */
  options: string[];
  /**
   * Starting active option
   */
  activeOption?: string;
  /**
   * Optional click handler
   */
  onClick: (name: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Selection: React.FC<SelectionProps> = ({
  options,
  activeOption,
  onClick,
}) => {
  const active = activeOption ?? options[0];
  const selectionOptions = options.map((option) => (
    <SelectionOption
      isActive={option === active}
      onClick={() => onClick(option)}
    >
      {option}
    </SelectionOption>
  ));
  return <StyledSelection>{selectionOptions}</StyledSelection>;
};
