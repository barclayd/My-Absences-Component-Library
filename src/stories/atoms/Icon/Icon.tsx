import React, { useEffect, useState } from 'react';
import { StyledIcon } from './StyledIcon';
import logo from '../../assets/logo.svg';

export enum RegisteredIcon {
  approved = 'approved',
  arrow = 'arrow',
  check = 'check',
  sandtimer = 'sandtimer',
  logo = 'logo',
  pinterest = 'pinterest',
  facebook = 'facebook',
  github = 'github',
  instagram = 'instagram',
  linkedin = 'linkedin',
  medium = 'medium',
  reddit = 'reddit',
  twitter = 'twitter',
  vimeo = 'vimeo',
  youtube = 'youtube',
  home = 'home',
  logout = 'logout',
  user = 'user',
}

export interface IconProps {
  /**
   * Placeholder text when input length is 0
   */
  iconName: RegisteredIcon;
  /**
   * Icon size
   */
  iconSize?: string;
  /**
   * Optional onChange handler
   */
  onClick?: () => void;
  /**
   * Optional icon colour, will default to theme specified colour if not provided
   */
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  color,
  iconName,
  iconSize,
  onClick,
}) => {
  const [icon, setIcon] = useState(logo);

  useEffect(() => {
    (async function dynamicImport(iconName: string) {
      if (!iconName) {
        return;
      }
      try {
        const icon = await import(`../../assets/${iconName}.svg`);
        setIcon(icon.default);
      } catch (e) {
        setIcon(logo);
      }
    })(iconName);
  });

  return (
    <StyledIcon
      iconSize={iconSize}
      color={color}
      src={icon}
      onClick={onClick}
    />
  );
};
