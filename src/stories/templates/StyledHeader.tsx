import styled from 'styled-components';
import { Theme } from '../../models/theme';

export interface HeaderProps {
  background?: string;
  theme: Theme;
}

export const StyledHeaderContainer = styled.div<HeaderProps>`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 180px;
  background: ${({ background, theme }: HeaderProps) =>
    background ?? theme.primary.background};
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-areas: 'user . . logo';
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  padding: 10px;
`;

export const StyledHeaderUserContainer = styled.div`
  grid-area: user;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledHeaderLogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
`;
