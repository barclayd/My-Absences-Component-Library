import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

interface SVGProps {
  color?: string;
  iconSize?: string;
  theme: Theme;
}

export const StyledIcon = styled(SVG)<SVGProps>`
  path {
    fill: ${({ color, theme }: SVGProps) => color ?? theme.icon};
  }
  width: ${({ iconSize }: SVGProps) => iconSize ?? '24px'};
`;
