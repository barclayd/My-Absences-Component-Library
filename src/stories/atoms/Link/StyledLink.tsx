import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize } from '../../../models/font';

export interface StyledLinkProps {
  color?: string;
  fontSize?: string;
  theme: Theme;
}

export const StyledLink = styled.a<StyledLinkProps>`
  font-size: ${({ fontSize }: StyledLinkProps) => fontSize ?? FontSize.medium};
  color: ${({ color, theme }: StyledLinkProps) =>
    color ?? theme.primary.colour};
  font-family: ${({ theme }: StyledLinkProps) => theme.font.secondaryFamily};
  text-decoration: underline;
  letter-spacing: -0.26px;
`;
