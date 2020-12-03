import React, { useState } from 'react';
import { StyledLabel, StyledSelection } from './StyledSelection';

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
  const handleClick = (option: string) => {
    setRadio(option);
    onClick(option);
  };

  const [activeRadio, setRadio] = useState(activeOption ?? options[0]);

  const selectionOptions = options.map((option) => (
    <StyledLabel isActive={option === activeRadio}>
      <input
        type="radio"
        name={option}
        id={option}
        onClick={() => handleClick(option)}
      />
      <span>{option}</span>
    </StyledLabel>
  ));
  return <StyledSelection>{selectionOptions}</StyledSelection>;
};
