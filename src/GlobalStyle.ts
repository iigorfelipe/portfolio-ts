import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url('/background.avif');
    background-repeat: repeat;
    background-size: 20%;
    text-align: center;
    color: white;
  }
`;
