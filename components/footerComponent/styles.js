import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 7.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.root.mainBackgroundColor};
  color: ${ props => props.theme.fontColor.white };

  @media (max-width: 575.98px) {
    height: 3.5rem;
  }

  @media (min-width: 576px) {
    height: 3.5rem;
  }

  @media (min-width: 768px) {
    height: 5rem;
  }

  @media (min-width: 1200px) {
    height: 7.5rem; 
  }
`

export const FooterLinks = styled.a `
 color: #b0b0b0;
 font-size: ${ props => props.theme.fontSize.fsSmall0 };
 padding: 0 8px;
 text-decoration: underline;

 @media (max-width: 575.98px) {
    font-size: ${props => props.theme.fontSize.fsSmall0};
  }

  @media (min-width: 576px) {
    font-size: ${ props => props.theme.fontSize.fsSmall00};
  }

  @media (min-width: 768px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }

  @media (min-width: 1200px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }
`