import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    background: ${props => props.theme.primary[700]};
    color: ${props => props.theme.primary[200]};
  }
  
  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
