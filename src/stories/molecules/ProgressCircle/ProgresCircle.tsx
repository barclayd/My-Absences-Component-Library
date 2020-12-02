import React from 'react';
import { StyledCircle } from '../../atoms/Circle/StyledCircle';
import { StyledArcStart, StyledArcEnd } from './StyledProgressCirlce';

export interface ProgressCircleProps {
  /**
   * Background colour for circle
   */
  background?: string;
  /**
   * Text for circle
   */
  text?: string;
  /**
   * Font weight for text in circle
   */
  fontWeight?: string | number;
  /**
   * Colour for text in circle
   */
  color?: string;
  /**
   * Size of circle
   */
  size?: string;
  /**
   * Font size for text in circle
   */
  fontSize?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  text,
  background,
  fontWeight,
  color,
  size,
  fontSize,
}) => {
  return (
    <StyledCircle
      background={background}
      fontWeight={fontWeight}
      color={color}
      size={size}
      fontSize={fontSize}
    >
      <StyledArcStart background={background} />
      <StyledArcEnd background={background} />
      {text}
    </StyledCircle>
  );
};
