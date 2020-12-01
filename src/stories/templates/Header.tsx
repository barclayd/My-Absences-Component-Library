import React from 'react';
import {
  StyledAction,
  StyledCircle,
  StyledContainer,
  StyledLogo,
  StyledName,
  StyledUser,
} from './StyledHeader';
import { Icon, RegisteredIcon } from '../atoms/Icon/Icon';
import { Heading, HeadingStyle } from '../atoms/Header/Heading';
import { Link } from '../atoms/Link/Link';
import { ProgressCircle } from '../molecules/ProgressCircle/ProgresCircle';

export interface HeaderProps {
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

export const Header: React.FC<HeaderProps> = ({
  background,
  initialsColour,
  circleBackground,
  initials,
  name,
}) => {
  const headingText = `Welcome ${name}`;
  return (
    <StyledContainer background={background}>
      <StyledUser>
        <StyledCircle>
          <ProgressCircle
            size="58px"
            text={initials}
            background={circleBackground}
            color={initialsColour}
            fontSize="25px"
          />
        </StyledCircle>
        <StyledName>
          <Heading style={HeadingStyle.heading} text={headingText} />
        </StyledName>
        <StyledAction>
          <Link text="Sign out" />
        </StyledAction>
      </StyledUser>
      <StyledLogo>
        <Icon iconName={RegisteredIcon.logo} color="#ffffff" iconSize="82px" />
      </StyledLogo>
    </StyledContainer>
  );
};
