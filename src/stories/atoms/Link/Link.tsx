import React from 'react';
import { StyledLink } from './StyledLink';

export interface LinkProps {
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

export const Link: React.FC<LinkProps> = ({ color, text, size }) => (
  <StyledLink fontSize={size} color={color}>
    {text}
  </StyledLink>
);
