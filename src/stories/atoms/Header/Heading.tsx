import React from 'react';
import { StyledHeading, StyledSubHeading, StyledTitle } from './StyledHeading';
import { StyledComponent } from 'styled-components';

export enum HeadingStyle {
  title = 'title',
  heading = 'heading',
  subheading = 'subheaing',
}

export interface HeadingProps {
  /**
   * Heading style
   */
  style: HeadingStyle.heading | HeadingStyle.title | HeadingStyle.subheading;
  /**
   * Text for heading
   */
  text: string;
  /**
   * Optional colour prop
   */
  color?: string;
}

const componentMap = new Map<HeadingStyle, StyledComponent<any, any>>([
  [HeadingStyle.title, StyledTitle],
  [HeadingStyle.heading, StyledHeading],
  [HeadingStyle.subheading, StyledSubHeading],
]);

export const Heading: React.FC<HeadingProps> = ({ color, text, style }) => {
  const Component = componentMap.get(style) ?? StyledTitle;
  return <Component color={color}>{text}</Component>;
};
