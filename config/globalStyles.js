import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

  html {
    font-size: ${props => props.theme.root.rootFontSize};
    box-sizing: ${props => props.theme.root.boxSizing};
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.root.mainBackgroundColor};
    font-family: ${props => props.theme.root.fontFamily};
  }
`

export default GlobalStyles;


// export const WrapperBackround = '#000'