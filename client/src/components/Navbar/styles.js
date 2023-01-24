import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  grid-area: NB;
`;

export const Option = styled.div`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 6px 0;

  > h4 {
    font-size: 14px;
  }

  > i {
    font-size: 22px;
    margin: 0 22px;
  }
`;