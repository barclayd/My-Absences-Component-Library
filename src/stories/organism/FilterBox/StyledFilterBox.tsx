import styled from 'styled-components';

export const StyledFilterBox = styled.div`
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.5);
  border-radius: 5px;
  display: grid;
  width: 100%;
  height: auto;
  min-height: 106px;
  background: #ffffff;
  grid-template-columns: 3fr 3fr 1.5fr 1fr;
  grid-template-areas: 'status type . toggle';
  grid-template-rows: auto;
  align-items: center;
  justify-items: flex-start;
  padding: 10px 15px;
`;

export const Status = styled.div`
  grid-area: status;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 20px;
    margin-left: 15px;
  }
`;

export const Type = styled.div`
  grid-area: type;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Toggle = styled.div`
  grid-area: toggle;
  justify-self: flex-start;
  height: 100%;
`;
