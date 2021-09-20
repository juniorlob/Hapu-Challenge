import { createGlobalStyle } from 'styled-components'
import { palette, theme } from 'styled-tools'

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
    background-color: ${palette('bgBody')};
    -webkit-font-smoothing: antialiased;
    font-size: ${theme('fontSize.body.md')};

    @media (${theme('breakpoint.md.max')}){
        font-size: ${theme('fontSize.body.xs')};
    }
  }

  body, input, button {
  
  
  }

  button {
    cursor: pointer;
    
  }

  ${theme('components.globalStyle')}
  
`

export default GlobalStyle
