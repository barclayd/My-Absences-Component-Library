import React from 'react';
import { StyledSelect, DisabledOption, SelectOption } from './StyledSelect';

export interface SelectProps {
  /**
   * Options for select
   */
  options: string[];
  /**
   * Placeholder for select
   */
  placeholder: string;
  /**
   * Click handler
   */
  onClick: (option: string) => void;
}

const capitaliseText = (text: string) => {
  const capitalLetter = text[0].toUpperCase();
  const remainingLetters = text.substring(1, text.length);
  return `${capitalLetter}${remainingLetters}`;
};

/**
 * Primary UI component for user interaction
 */
export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  onClick,
}) => {
  const optionList = options.map((option) => (
    <SelectOption>{capitaliseText(option)}</SelectOption>
  ));
  return (
    <StyledSelect onChange={(e) => onClick(e.target.value)}>
      <DisabledOption disabled selected>
        {placeholder}
      </DisabledOption>
      {optionList}
    </StyledSelect>
  );
};
