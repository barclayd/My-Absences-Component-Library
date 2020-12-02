import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  min-height: 68px;
  background: #ffffff;
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.5);
  border-radius: 5px;
  grid-template-columns: 1fr 3fr 2fr 2fr 1.5fr 1px 1.5fr 1fr;
  grid-template-areas: 'date-circle record . . date line status icon';
  grid-template-rows: auto;
  align-items: center;
  justify-items: flex-start;
  padding: 15px;
`;

export const DateCircleContainer = styled.div`
  grid-area: date-circle;
`;

export const RecordContainer = styled.div`
  grid-area: record;
`;

export const DateContainer = styled.div`
  grid-area: date;
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
`;

export const IconContainer = styled.div`
  grid-area: icon;
`;
