import styled from 'styled-components';
import { StyledText } from '../../atoms/Text/StyledText';
import { StyledTheme } from '../../../models/theme';

export const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 68px;
  background: #ffffff;
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.5);
  border-radius: 5px;
  grid-template-columns: 75px 3fr 2fr 2fr 1.5fr 1px 1.25fr 0.5fr;
  grid-template-areas: 'date-circle record . . date line status icon';
  grid-template-rows: auto;
  align-items: center;
  justify-items: flex-start;
  padding: 5px 15px;
  cursor: pointer;
`;

export const DateCircleContainer = styled.div`
  grid-area: date-circle;
`;

export const RecordContainer = styled.div`
  grid-area: record;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  & > * {
    margin: 3.5px;
  }
`;

export const DateContainer = styled.div`
  grid-area: date;
  justify-self: flex-end;
  margin-right: 20px;
`;

export const Line = styled.div`
  grid-area: line;
  height: 100%;
  width: 1px;
  background: #979797;
  opacity: 0.5;
`;

export const Status = styled.div`
  grid-area: status;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  width: 100%;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const IconContainer = styled.div`
  grid-area: icon;
  justify-self: center;
`;

export const DateText = styled(StyledText)`
  font-family: ${({ theme }: StyledTheme) => theme.font.secondaryFamily};
  text-transform: capitalize;
`;
