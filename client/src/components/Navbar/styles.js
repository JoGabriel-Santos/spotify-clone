import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  grid-area: NB;
  padding-top: 15px;
`;

export const Option = styled.div`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  padding: 5px 0;

  > h4 {
    font-size: 14px;
    font-weight: 500;
  }

  > i {
    font-size: 22px;
    margin: 0 20px;
  }
`;