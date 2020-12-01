import styled from 'styled-components';
import { StyledCircle } from '../../atoms/Circle/StyledCircle';

export const StyledProgressCircle = styled(StyledCircle)`
  position: relative;
  &&:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: ${({ background, theme }) =>
      `2px solid ${background ?? theme.primary.background}`};
    border-radius: 50%;
  }
`;
