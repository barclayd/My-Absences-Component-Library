import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

interface SVGProps {
  color?: string;
  theme: Theme;
}

export const StyledIcon = styled(SVG)<SVGProps>`
  path {
    fill: ${(props: SVGProps) => props.color ?? props.theme.icon};
  }
`;
