import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: '#f0f0f5';
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

`;
