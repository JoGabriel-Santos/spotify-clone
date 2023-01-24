import styled from "styled-components";

// LO - Logo
// UO - UserOptions
// NB - Navbar
// HO - Home
// PC - Player Controls

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    'LO UO'
    'NB HO'
    'PC PC';
  grid-template-columns: 332px auto;
  grid-template-rows: 72px auto 90px;
  height: 100vh;
`;