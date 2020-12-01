import { withThemesProvider } from 'themeprovider-storybook';
import { darkTheme, lightTheme } from '../src/config';

const themes = [lightTheme, darkTheme];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [withThemesProvider(themes)];
