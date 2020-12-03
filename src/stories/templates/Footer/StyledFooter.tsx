import styled from 'styled-components';
import { Theme } from '../../../models/theme';
import { FontSize, FontTypeface } from '../../../models/font';

interface FooterProps {
  background?: string;
  theme: Theme;
}

const MARGIN = '60px';

export const FooterContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 407px;
  background: ${({ background, theme }: FooterProps) =>
    background ?? theme.secondary.background};
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-template-areas:
    'location location email email'
    'top-line top-line top-line top-line'
    '. icon icon .'
    'bottom-line bottom-line bottom-line bottom-line'
    'copyright copyright copyright copyright';
  grid-template-rows: 3fr 1px 1fr 1px 0.5fr;
  align-items: center;
  justify-items: center;
  padding: 20px 0;
`;

export const LocationContainer = styled.div`
  grid-area: location;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 75%;
  height: 70%;
  align-items: center;
  justify-items: flex-start;
  margin-left: ${MARGIN};
`;

export const Location = styled.div`
  color: #ffffff;
  font-size: ${FontSize.medium};
  text-align: left;
  font-family: ${FontTypeface.standard};
`;

export const EmailContainer = styled.div`
  grid-area: email;
  height: 80%;
  width: 58%;
`;

export const EmailSignUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Icons = styled.div`
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 17px;
  }
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
  align-self: flex-end;
  margin-left: ${MARGIN};
`;
