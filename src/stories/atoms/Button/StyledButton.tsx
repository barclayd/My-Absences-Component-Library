import { StyledTheme } from '../../../models/theme';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background: ${({ theme }: StyledTheme) => theme.primary.background};
  width: auto;
  max-width: 65px;
  height: 45px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${({ theme: { font } }: StyledTheme) => font.typeface};
  font-size: ${({ theme: { font } }: StyledTheme) => font.size};
  color: ${({ theme }: StyledTheme) => theme.primary.colour};
  font-weight: ${({ theme: { font } }: StyledTheme) => font.weight};
`;
