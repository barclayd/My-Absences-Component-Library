import styled from 'styled-components';
import { StyledCircle } from '../../atoms/Circle/StyledCircle';
import { FontSize, FontWeight } from '../../../models/font';
import { StyledTheme } from '../../../models/theme';

export const StyledDateCircle = styled(StyledCircle)`
  flex-direction: column;
`;

export const DayLabel = styled.div`
  font-size: ${FontSize.subheading};
  color: #ffffff;
  font-weight: ${FontWeight.bold};
  text-align: center;
  font-family: ${({ theme }: StyledTheme) => theme.font.family};
  letter-spacing: -1.11px;
`;

export const MonthLabel = styled(DayLabel)`
  letter-spacing: -0.93px;
  font-size: ${FontSize.small};
  margin-bottom: 5px;
`;
