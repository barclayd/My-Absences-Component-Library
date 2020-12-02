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
   * Icons for footer
   */
  icons: RegisteredIcon[];
  /**
   * Copyright text for footer
   */
  copyright: string;
  /**
   * Header for email in footer
   */
  emailHeader: string;
  /**
   * Text for email in footer
   */
  emailText: string;
  /**
   * Email placeholder input for email in footer
   */
  emailInputPlaceholder: string;
  /**
   * Email button text for email in footer
   */
  emailButtonText: string;
}

export const Footer: React.FC<FooterProps> = ({
  locations,
  icons,
  copyright = '© All rights reserved, 2020',
  emailHeader,
  emailText,
  emailInputPlaceholder,
  emailButtonText,
}) => {
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
        <Heading style={HeadingStyle.subheading} text={emailHeader} />
        <Text text={emailText} />
        <EmailSignUp>
          <Input placeholder={emailInputPlaceholder} />
          <Button label={emailButtonText} />
        </EmailSignUp>
      </EmailContainer>
      <TopLine />
      <Icons>{iconElememtns}</Icons>
      <BottomLine />
      <Copyright>
        <Text text={copyright} />
      </Copyright>
    </FooterContainer>
  );
};
