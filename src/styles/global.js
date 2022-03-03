import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    width: 100%;
  }

  :root {
    --sidebar-width: 11rem;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
