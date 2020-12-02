import styled from 'styled-components';
import { StyledTheme } from '../../../models/theme';
import { FontSize } from '../../../models/font';

interface SelectionOptionProps {
  isActive: boolean;
}

export const StyledSelection = styled.div`
  background: #ffffff;
  border: 1px solid #d5d1d1;
  position: relative;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  max-height: 44px;
  max-width: 306px;
  justify-content: space-evenly;
  align-items: center;

  &:after {
    background: #b74237;
    width: 25%;
    content: '\\A';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 75%;
    right: 0;
  }
`;

export const SelectionOption = styled.div<SelectionOptionProps>`
  font-family: ${({ theme }: StyledTheme) => theme.font.family};
  font-size: ${FontSize.medium};
  color: #767676;
  padding: 10px 5px;
`;
