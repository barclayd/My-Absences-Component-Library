import styled from 'styled-components';
import { Theme } from '../../../models/theme';

interface FooterProps {
  background?: string;
  theme: Theme;
}

export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 407px;
  background: ${({ background, theme }: FooterProps) =>
    background ?? theme.secondary.background};
  grid-template-columns: 3fr 2fr 2fr 3fr;
  grid-template-areas:
    'location location email email'
    'top-line top-line top-line top-line'
    '. icon icon .'
    'bottom-line bottom-line bottom-line bottom-line'
    'copyright copyright copyright copyright';
  grid-template-rows: 3fr 1px 1.5fr 1px 0.5fr;
  align-items: center;
  justify-items: center;
  padding: 41px 0;
`;

export const Location = styled.div`
  grid-area: location;
  display: flex;
`;

export const Email = styled.div`
  grid-area: email;
`;

export const Icons = styled.div`
  grid-area: icon;
  margin: 10px 0;
`;

export const Line = styled.div`
  background: #686868;
  width: 100%;
  height: 1px;
`;

export const TopLine = styled(Line)`
  grid-area: top-line;
`;

export const BottomLine = styled(Line)`
  grid-area: bottom-line;
`;

export const Copyright = styled.div`
  grid-area: copyright;
  justify-self: flex-start;
  align-items: center;
`;
