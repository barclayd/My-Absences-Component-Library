import styled from 'styled-components';
import { StyledTheme } from '../../../models/theme';

export const StyledInput = styled.input`
  font-size: ${({ theme }: StyledTheme) => theme.font.size};
  font-family: ${({ theme }: StyledTheme) => theme.font.family};
  width: 400px;
  height: 44px;
  padding: 7px 16px;
  border-radius: 2px;
  border: 1px solid #e9e9e9;
  background: #ffffff;
  &::placeholder {
    color: ${({ theme }: StyledTheme) => theme.placeholder};
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
`;
