import styled from 'styled-components';
import { Theme } from '../../../models/theme';

interface StyledProgressCircleProps {
  background?: string;
  theme: Theme;
}

export const StyledArc = styled.div`
  position: absolute;
  top: 11px;
  left: 11px;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  border: 2px solid;
`;

export const StyledArcStart = styled(StyledArc)<StyledProgressCircleProps>`
  border-color: ${({ background, theme }: StyledProgressCircleProps) =>
      background ?? theme.primary.background}
    ${({ background, theme }: StyledProgressCircleProps) =>
      background ?? theme.primary.background}
    ${({ background, theme }: StyledProgressCircleProps) =>
      background ?? theme.primary.background}
    transparent;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
`;

export const StyledArcEnd = styled(StyledArc)<StyledProgressCircleProps>`
  border-color: ${({ background, theme }: StyledProgressCircleProps) =>
      background ?? theme.primary.background}
    ${({ background, theme }: StyledProgressCircleProps) =>
      background ?? theme.primary.background}
    transparent transparent;
  -webkit-transform: rotate(75deg);
  -moz-transform: rotate(75deg);
  -ms-transform: rotate(75deg);
  -o-transform: rotate(75deg);
  transform: rotate(75deg);
`;
