import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.root.mainBackgroundColor};
  color: ${ props => props.theme.fontColor.white };
`

export const FooterLinks = styled.a `

 color: #b0b0b0;
 font-size: ${ props => props.theme.fontSize.fsSmall0 };
 padding: 0 8px;
 text-decoration: underline;
`