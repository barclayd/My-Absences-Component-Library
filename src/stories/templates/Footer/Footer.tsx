import React from 'react';
import {
  BottomLine,
  Copyright,
  EmailContainer,
  EmailSignUp,
  FooterContainer,
  Icons,
  Location,
  LocationContainer,
  TopLine,
} from './StyledFooter';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { Heading, HeadingStyle } from '../../atoms/Header/Heading';
import { Text } from '../../atoms/Text/Text';

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
   * Array of location names for footer
   */
  locations: string[];
  /**
   * Background colour for <ProgressCircle /> in header
   */
  circleBackground?: string;
  /**
   * Name for user in header
   */
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ locations }) => {
  const locationElements = locations.map((location) => (
    <Location>{location}</Location>
  ));

  return (
    <FooterContainer>
      <LocationContainer>{locationElements}</LocationContainer>
      <EmailContainer>
        <Heading style={HeadingStyle.subheading} text="Lorem Ipsum" />
        <Text text="Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal." />
        <EmailSignUp>
          <Input placeholder="Placeholder text" />
          <Button label="Sign Up" />
        </EmailSignUp>
      </EmailContainer>
      <TopLine />
      <Icons>Hello!</Icons>
      <BottomLine />
      <Copyright>Copyright</Copyright>
    </FooterContainer>
  );
};
