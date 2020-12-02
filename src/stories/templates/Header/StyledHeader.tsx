import styled from 'styled-components';
import { Theme } from '../../../models/theme';

export interface HeaderProps {
  background?: string;
  theme: Theme;
}

export const StyledContainer = styled.div<HeaderProps>`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 180px;
  background: ${({ background, theme }: HeaderProps) =>
    background ?? theme.primary.background};
  grid-template-columns: 2.5fr 3fr 3fr 1fr;
  grid-template-areas: 'user . . logo';
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  padding: 37px;
`;

export const StyledUser = styled.div`
  grid-area: user;
  display: grid;
  justify-self: flex-start;
  align-self: flex-start;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    'circle name'
    'circle action';
  width: auto;
  height: 33%;
`;

export const StyledLogo = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCircle = styled.div`
  grid-area: circle;
  justify-self: center;
`;

export const StyledName = styled.div`
  grid-area: name;
`;

export const StyledAction = styled.div`
  grid-area: action;
`;
