import styled from 'styled-components';

export const StyledBody = styled.div`
  background: #eeeeee;
  display: flex;
  justify-content: flex-start;
  & > *:not(:first-child) {
    margin-left: 55px;
  }
`;

export const StyledAbsenceBody = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  & > * {
    margin: 22px 0 !important;
  }
`;
