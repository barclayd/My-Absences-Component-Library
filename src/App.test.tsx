import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './config';
import { Button } from './stories';

test('renders the correct button label', () => {
  const buttonLabel = 'Sign up';
  render(
    <ThemeProvider theme={lightTheme}>
      <Button label={buttonLabel} />
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(buttonLabel);
  expect(linkElement).toBeInTheDocument();
});
