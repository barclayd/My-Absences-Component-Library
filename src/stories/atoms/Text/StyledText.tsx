import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize } from '../../../models/font';

export interface StyledTextProps {
  color?: string;
  fontSize?: string;
  theme: Theme;
}

export const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ fontSize }: StyledTextProps) => fontSize ?? FontSize.small};
  color: ${({ color, theme }: StyledTextProps) =>
    color ?? theme.primary.colour};
  font-family: ${(props: StyledTextProps) => props.theme.font.family};
`;
