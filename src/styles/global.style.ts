import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {

    -webkit-font-smothing: antialiased !important;
  }

  body, input, button {
  
  
  }

  button {
    cursor: pointer;
  }
  
`

export default GlobalStyle
