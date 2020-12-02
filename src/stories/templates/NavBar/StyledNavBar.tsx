import styled from 'styled-components';

interface StyledNavBarProps {
  minHeight?: string;
}

interface StyledNavIconProps {
  isActive: boolean;
}

const WIDTH = '55px';

export const StyledNavBar = styled.div<StyledNavBarProps>`
  height: auto;
  width: ${WIDTH};
  min-height: ${({ minHeight }: StyledNavBarProps) => minHeight ?? '100%'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:not(:first-child) {
    margin: 20px auto;
  }
  background: #ffffff;
`;

export const NavIconBackground = styled.div<StyledNavIconProps>`
  background: ${({ isActive }: StyledNavIconProps) =>
    isActive ? 'rgba(60,59,59, 0.2)' : 'none'};
  width: ${WIDTH};
  box-sizing: border-box;
  height: 59px;
  border-left: ${({ isActive }: StyledNavIconProps) =>
    isActive ? '5px solid #BA8C3E' : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
