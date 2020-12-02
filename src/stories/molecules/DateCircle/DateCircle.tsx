import React from 'react';
import { DayLabel, StyledDateCircle, MonthLabel } from './StyledDateCircle';

export interface DateCircleProps {
  /**
   * Background colour for circle
   */
  background?: string;
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
  /**
   * Date as a string e.g. "2020-12-02T14:24:49.833Z"
   */
  date: string;
}

const monthMap: Map<number, string> = new Map([
  [0, 'January'],
  [1, 'February'],
  [2, 'March'],
  [3, 'April'],
  [4, 'May'],
  [5, 'June'],
  [6, 'July'],
  [7, 'August'],
  [8, 'September'],
  [9, 'October'],
  [10, 'November'],
  [11, 'December'],
]);

/**
 * Primary UI component for user interaction
 */
export const DateCircle: React.FC<DateCircleProps> = ({
  background,
  fontWeight,
  color,
  size,
  fontSize,
  date,
}) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = monthMap
    .get(dateObject.getMonth())
    ?.toUpperCase()
    .substring(0, 3);
  return (
    <StyledDateCircle
      background={background}
      fontWeight={fontWeight}
      color={color}
      size={size}
      fontSize={fontSize}
    >
      <DayLabel>{day}</DayLabel>
      <MonthLabel>{month}</MonthLabel>
    </StyledDateCircle>
  );
};
