import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: ${props => props.theme.root.boxSizing};
    margin: 0;
    padding: 0;
  }

  html {
    font-size: ${props => props.theme.root.rootFontSize};
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.root.mainBackgroundColor};
    font-family: ${props => props.theme.root.fontFamily};
    margin: 0;
  }
`

export default GlobalStyles;


// export const WrapperBackround = '#000'