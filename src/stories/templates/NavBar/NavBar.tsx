import React from 'react';
import { StyledNavBar, NavIconBackground } from './StyledNavBar';
import { Icon, RegisteredIcon } from '../../atoms/Icon/Icon';

export interface NavBarProps {
  /**
   * Icons for <Navbar />
   */
  icons: RegisteredIcon[];
  /**
   * Active icon in <NavBar />
   */
  activeIcon: RegisteredIcon;
  /**
   * Min height for <NavBar />
   */
  minHeight?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
  icons,
  activeIcon,
  minHeight,
}) => {
  const navbarIcons = icons.map((icon) => (
    <NavIconBackground isActive={activeIcon === icon}>
      <Icon iconName={icon} color="#000000" iconSize="20px" />
    </NavIconBackground>
  ));

  return <StyledNavBar minHeight={minHeight}>{navbarIcons}</StyledNavBar>;
};
