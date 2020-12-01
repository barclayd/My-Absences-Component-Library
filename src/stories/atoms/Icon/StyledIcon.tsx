import { StyledTheme } from '../../../models/theme';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

interface SVGProps {
  color?: string;
  theme: StyledTheme;
}

export const StyledIcon = styled(SVG)<SVGProps>`
  path {
    fill: ${(props) => props.color ?? props.theme.icon};
  }
`;
