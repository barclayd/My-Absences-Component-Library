import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize, FontWeight } from '../../../models/font';

export interface HeaderProps {
  color?: string;
  theme: Theme;
}

const headingStyles = `
  font-weight: ${FontWeight.bold};
  `;

export const StyledTitle = styled.h1<HeaderProps>`
  background: ${FontSize.title};
  color: ${(props: HeaderProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeaderProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledHeading = styled.h2<HeaderProps>`
  background: ${FontSize.heading};
  color: ${(props: HeaderProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeaderProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledSubHeading = styled.h3<HeaderProps>`
  background: ${FontSize.subheading};
  color: ${(props: HeaderProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeaderProps) => props.theme.font.family};
  ${headingStyles}
`;
