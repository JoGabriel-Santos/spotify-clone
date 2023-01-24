import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  grid-area: UO;
  justify-content: space-between;
  padding: 0 40px;

  > div .prev, .next {
    font-size: 28px;
  }
`;

export const Navigation = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 18px;
`;

export const UserInfo = styled.div`
`;