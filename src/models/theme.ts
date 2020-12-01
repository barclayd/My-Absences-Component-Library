import { Font } from './font';

export interface Theme {
  name: string;
  primary: {
    background: string;
    colour: string;
  };
  secondary: {
    background: string;
    colour: string;
  };
  font: Font;
}

export interface StyledTheme {
  theme: Theme;
}
