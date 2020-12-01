import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize, FontWeight } from '../../../models/font';

export interface HeadingProps {
  color?: string;
  theme: Theme;
}

const headingStyles = `
  font-weight: ${FontWeight.bold};
  `;

export const StyledTitle = styled.h1<HeadingProps>`
  background: ${FontSize.title};
  color: ${(props: HeadingProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledHeading = styled.h2<HeadingProps>`
  background: ${FontSize.heading};
  color: ${(props: HeadingProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledSubHeading = styled.h3<HeadingProps>`
  background: ${FontSize.subheading};
  color: ${(props: HeadingProps) => props.color ?? props.theme.icon};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles}
`;
