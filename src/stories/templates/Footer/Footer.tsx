import React from 'react';
import {
  FooterContainer,
  Location,
  Email,
  Icons,
  Line,
  Copyright,
  TopLine,
  BottomLine,
} from './StyledFooter';

export interface FooterProps {
  /**
   * Optional colour for background of header
   */
  background?: string;
  /**
   * Optional colour for initials in <ProgressCircle /> in header
   */
  initialsColour?: string;
  /**
   * Initials for <ProgressCircle /> in header
   */
  initials: string;
  /**
   * Background colour for <ProgressCircle /> in header
   */
  circleBackground?: string;
  /**
   * Name for user in header
   */
  name: string;
}

export const Footer: React.FC<FooterProps> = () => (
  <FooterContainer>
    <Location>Location</Location>
    <Email>Email</Email>
    <TopLine />
    <Icons>Hello!</Icons>
    <BottomLine />
    <Copyright>Copyright</Copyright>
  </FooterContainer>
);
