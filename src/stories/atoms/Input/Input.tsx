import React from 'react';
import { StyledInput } from './StyledInput';

export interface InputProps {
  /**
   * Placeholder text when input length is 0
   */
  placeholder: string;
  /**
   * Optional onChange handler
   */
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};
