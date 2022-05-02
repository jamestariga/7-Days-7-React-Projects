import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #333;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
