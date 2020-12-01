import { Theme } from './models/theme';
import { Font, FontSize, FontTypeface, FontWeight } from './models/font';

export const font = (
  size: FontSize = FontSize.medium,
  weight: FontWeight = FontWeight.standard,
): Font => ({
  typeface: FontTypeface.standard,
  family: FontTypeface.standard,
  secondaryFamily: FontTypeface.calibri,
  weight,
  size,
});

const defaultFont = font();

export const lightTheme: Theme = {
  name: 'Light Theme',
  primary: {
    background: '#B74237',
    colour: '#ffffff',
  },
  secondary: {
    background: '#383739',
    colour: '#ffffff',
  },
  placeholder: '#354052',
  font: defaultFont,
  icon: '#2E384D',
};

export const darkTheme: Theme = {
  name: 'Dark Theme',
  primary: {
    background: '#B74237',
    colour: '#003366',
  },
  secondary: {
    background: '#fafafa',
    colour: '#003366',
  },
  placeholder: '#354052',
  font: defaultFont,
  icon: '#ffffff',
};

export enum AppTheme {
  light = 'light',
  dark = 'dark',
}
