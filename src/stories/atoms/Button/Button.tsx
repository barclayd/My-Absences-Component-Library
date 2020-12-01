import React from 'react';
import { StyledButton } from './StyledButton';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
