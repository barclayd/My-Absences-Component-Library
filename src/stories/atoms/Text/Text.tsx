import React from 'react';
import { StyledText } from './StyledText';

export interface TextProps {
  /**
   * Text for heading
   */
  text: string;
  /**
   * Optional colour prop
   */
  color?: string;
  /**
   * Optional size prop
   */
  size?: string;
}

export const Text: React.FC<TextProps> = ({ color, text, size }) => (
  <StyledText fontSize={size} color={color}>
    {text}
  </StyledText>
);
