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
}

export const Header: React.FC<HeaderProps> = ({ background }) => (
  <StyledContainer background={background}>
    <StyledUser>
      <StyledCircle>
        <ProgressCircle
          size="58px"
          text="SL"
          background="#ffffff"
          color="#523065"
          fontSize="25px"
        />
      </StyledCircle>
      <StyledName>
        <Heading style={HeadingStyle.heading} text="Welcome Sam" />
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
