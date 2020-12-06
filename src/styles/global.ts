import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${({ theme }) => theme.colors.background};
  }

  *, input, button, pre {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
  }
`
