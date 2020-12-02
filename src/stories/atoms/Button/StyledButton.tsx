import { StyledTheme } from '../../../models/theme';
import styled from 'styled-components';
import { FontSize } from '../../../models/font';

export const StyledButton = styled.div`
  background: ${({ theme }: StyledTheme) => theme.primary.background};
  width: auto;
  max-width: 65px;
  height: 45px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${({ theme: { font } }: StyledTheme) => font.typeface};
  font-size: ${FontSize.small};
  color: ${({ theme }: StyledTheme) => theme.primary.colour};
  font-weight: ${({ theme: { font } }: StyledTheme) => font.weight};
`;
