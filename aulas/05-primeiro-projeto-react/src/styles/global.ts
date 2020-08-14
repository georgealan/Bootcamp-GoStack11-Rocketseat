import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

/**
 * As ` ` são templates literals do JavaScript que serve para inserir variáveis, texto dentro de um
 * scopo com muita facilidade.
 */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, -moz-user-input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
