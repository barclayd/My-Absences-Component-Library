import React from 'react';
import { StyledIcon } from './StyledIcon';
import approved from '../../assets/approved.svg';
import check from '../../assets/check.svg';
import sandtimer from '../../assets/sandtimer.svg';
import arrow from '../../assets/arrow.svg';
import logo from '../../assets/logo.svg';

export enum RegisteredIcon {
  approved = 'approved',
  arrow = 'arrow',
  check = 'check',
  sandtimer = 'sandtimer',
  logo = 'logo',
}

export interface IconProps {
  /**
   * Placeholder text when input length is 0
   */
  iconName:
    | RegisteredIcon.arrow
    | RegisteredIcon.sandtimer
    | RegisteredIcon.check
    | RegisteredIcon.approved
    | RegisteredIcon.logo;
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

const iconMap = new Map<RegisteredIcon, string>([
  [RegisteredIcon.approved, approved],
  [RegisteredIcon.check, check],
  [RegisteredIcon.sandtimer, sandtimer],
  [RegisteredIcon.arrow, arrow],
  [RegisteredIcon.logo, logo],
]);

export const Icon: React.FC<IconProps> = ({
  color,
  iconName,
  iconSize,
  onClick,
}) => {
  const icon = iconMap.get(iconName) ?? approved;

  return (
    <StyledIcon
      iconSize={iconSize}
      color={color}
      src={icon}
      onClick={onClick}
    />
  );
};
