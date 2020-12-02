import styled from 'styled-components';
import { Theme } from '../../../models/theme';
import { FontSize } from '../../../models/font';

interface SelectionOptionProps {
  isActive: boolean;
  theme: Theme;
}

const background = '#ffffff';

export const StyledSelection = styled.div`
  position: relative;
  display: inline;
  label span {
    padding: 1em 2em 1em 2em;
    border: 2px solid #dfdfdf;
    background: ${background};
    position: relative;
    z-index: 10;
    &:hover {
      background: #ddd;
    }
  }
  label:first-of-type span {
    border-radius: 8px 0 0 8px;
    border-width: 2px 0 2px 2px;
  }
  label:last-of-type span {
    border-radius: 0 8px 8px 0;
  }
  input[type='radio'] {
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
    width: 0;
    padding: 0;
    height: 0;
    margin: 0 -15px 0 0;
  }
`;

export const StyledLabel = styled.label<SelectionOptionProps>`
  input[type='radio']:checked + span {
   background: ${({ isActive }: SelectionOptionProps) =>
     isActive ? '#B74237' : background};
     font-family: ${({ theme }: SelectionOptionProps) =>
       theme.font.secondaryFamily};
     font-size: ${FontSize.medium}
  }
  color: ${({ isActive }: SelectionOptionProps) =>
    isActive ? '#ffffff' : '#767676'};
  }

`;
