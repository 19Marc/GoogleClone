import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  background-color: ${props => props.theme.root.mainBackgroundColor};
  color: ${ props => props.theme.fontColor.white };

  @media (max-width: 575.98px) {
    height: 3.5rem;
    padding: 0;
    margin-top: .75rem;
    flex-wrap: wrap;
  }

  @media (min-width: 576px) {
    height: 3.5rem;
    margin-top: .75rem;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    height: 5rem;
    flex-wrap: nowrap
  }

  @media (min-width: 1200px) {
    height: 7.5rem; 
    flex-wrap: nowrap
  }
`

export const FooterLinks = styled.a `
  width: 100%;
  color: #b0b0b0;
  font-size: ${ props => props.theme.fontSize.fsSmall0 };
  padding: 0 8px;
  text-decoration: underline;
  text-align: center;

 @media (max-width: 575.98px) {
    font-size: ${props => props.theme.fontSize.fsSmall0};
    margin-top: .25rem;
    padding: 0;
  }

  @media (min-width: 576px) {
    font-size: ${ props => props.theme.fontSize.fsSmall00};
    margin-top: .25rem;
    padding: 0;
  }

  @media (min-width: 768px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }

  @media (min-width: 1200px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }
`