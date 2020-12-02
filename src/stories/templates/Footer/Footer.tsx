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
import { Icon, RegisteredIcon } from '../../atoms/Icon/Icon';

export interface FooterProps {
  /**
   * Array of location names for footer
   */
  locations: string[];
  /**
   * Background colour for <ProgressCircle /> in header
   */
  icons: RegisteredIcon[];
}

export const Footer: React.FC<FooterProps> = ({ locations, icons }) => {
  const locationElements = locations.map((location) => (
    <Location>{location}</Location>
  ));

  const iconElememtns = icons.map((icon) => (
    <Icon iconName={icon} color="#ffffff" iconSize="24px" />
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
      <Icons>{iconElememtns}</Icons>
      <BottomLine />
      <Copyright>
        <Text text="© All rights reserved, 2020" />
      </Copyright>
    </FooterContainer>
  );
};
