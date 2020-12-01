import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize } from '../../../models/font';

interface StyledCircleProps {
  background?: string;
  fontWeight?: string;
  color?: string;
  size?: string;
  fontSize?: string;
  theme: Theme;
}

export const StyledCircle = styled.div<StyledCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${({ theme }: StyledCircleProps) => theme.font.family};
  background: ${({ background, theme }: StyledCircleProps) =>
    background ?? theme.primary.background};
  width: ${({ size }: StyledCircleProps) => size ?? '30px'};
  height: ${({ size }: StyledCircleProps) => size ?? '30px'};
  font-size: ${({ fontSize }: StyledCircleProps) =>
    fontSize ?? FontSize.subheading};
  color: ${({ color, theme }: StyledCircleProps) =>
    color ?? theme.primary.colour};
  font-weight: ${({ fontWeight, theme }: StyledCircleProps) =>
    fontWeight ?? theme.font.weight};
`;
