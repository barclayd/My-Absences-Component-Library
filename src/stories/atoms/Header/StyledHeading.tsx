import { Theme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize, FontWeight } from '../../../models/font';

export interface HeadingProps {
  color?: string;
  theme: Theme;
}

const headingStyles = `
  font-weight: ${FontWeight.bold};
  margin: 0;
  padding: 0;
  letter-spacing: -0.45px;
  `;

export const StyledTitle = styled.h1<HeadingProps>`
  font-size: ${FontSize.title};
  color: ${(props: HeadingProps) => props.color ?? props.theme.primary.colour};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledHeading = styled.h2<HeadingProps>`
  font-size: ${FontSize.heading};
  color: ${(props: HeadingProps) => props.color ?? props.theme.primary.colour};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles}
`;

export const StyledSubHeading = styled.h3<HeadingProps>`
  font-size: ${FontSize.subheading};
  color: ${(props: HeadingProps) => props.color ?? props.theme.primary.colour};
  font-family: ${(props: HeadingProps) => props.theme.font.family};
  ${headingStyles};
  margin: 4px 0;
`;
