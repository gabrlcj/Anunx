import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --grey-100: #f0f0f0;
    --grey-500: #d3d3d8;
    --grey-900: #808080;

    --white-900: #ffffff;

    --black-900: #000000;

    --red-500: #950101;
  }
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font: 400 1rem Roboto, sans-serif;
    background: var(--grey-500);
    color: var(--black-900);
  }

  button, textarea {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`
