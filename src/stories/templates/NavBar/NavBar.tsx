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
  /**
   * Min height for <NavBar />
   */
  onIconClick: (icon: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  icons,
  activeIcon,
  minHeight,
  onIconClick = () => {},
}) => {
  const navbarIcons = icons.map((icon) => (
    <NavIconBackground isActive={activeIcon === icon}>
      <Icon
        onClick={() => onIconClick(icon)}
        iconName={icon}
        color="#000000"
        iconSize="20px"
      />
    </NavIconBackground>
  ));

  return <StyledNavBar minHeight={minHeight}>{navbarIcons}</StyledNavBar>;
};
