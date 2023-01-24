import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    font-family: 'Montserrat', sans-serif;
    outline: 0;
  }
`;