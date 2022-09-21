import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url('https://user-images.githubusercontent.com/87145566/191610485-c448cd6a-c801-4291-91ac-dc6e2839a40f.png');
    background-repeat: repeat;
    background-size: 20%;
    text-align: center;
    color: white;
  }
`;
