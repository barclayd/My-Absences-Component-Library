import React from 'react';
import {
  StyledHeaderContainer,
  StyledHeaderLogoContainer,
  StyledHeaderUserContainer,
} from './StyledHeader';
import { Icon, RegisteredIcon } from '../atoms/Icon/Icon';

export interface HeaderProps {
  /**
   * Optional colour for background of header
   */
  background?: string;
}

export const Header: React.FC<HeaderProps> = ({ background }) => (
  <StyledHeaderContainer background={background}>
    <StyledHeaderUserContainer>Hello</StyledHeaderUserContainer>
    <StyledHeaderLogoContainer>
      <Icon iconName={RegisteredIcon.logo} color="#ffffff" iconSize="82px" />
    </StyledHeaderLogoContainer>
  </StyledHeaderContainer>
);
