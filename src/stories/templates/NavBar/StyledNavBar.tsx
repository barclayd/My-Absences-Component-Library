import styled from 'styled-components';
import { StyledIcon } from '../../atoms/Icon/StyledIcon';

interface StyledNavBarProps {
  minHeight?: string;
}

interface StyledNavIconProps {
  isActive: boolean;
}

export const StyledNavBar = styled.div<StyledNavBarProps>`
  height: auto;
  width: 55px;
  min-height: ${({ minHeight }: StyledNavBarProps) => minHeight};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &:not(:first-child) {
    margin: 20px auto;
  }
  background: #ffffff;
`;

export const StyledNavIcon = styled(StyledIcon)<StyledNavIconProps>`
  background: ${({ isActive }: StyledNavIconProps) =>
    isActive ? 'rgba(60,59,59, 0.2)' : 'none'};
`;
