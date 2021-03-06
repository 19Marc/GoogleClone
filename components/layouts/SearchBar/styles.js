import styled from 'styled-components'

export const SearchbarWrapper = styled.div`
  background-color: black;
  color: black;
  width: 100%;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0;
`

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0;
`

export const SearchbarInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.3rem;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 3px;
  line-height: ${ props => props.theme.lineHeight.lhMiddle0};
  outline: none;

  @media (max-width: 575.98px) {
    line-height: ${ props => props.theme.lineHeight.lhMiddle0};
  }

  @media (min-width: 576px) {
    line-height: ${ props => props.theme.lineHeight.lhMiddle0};
  }

  @media (min-width: 768px) {
    line-height: ${ props => props.theme.lineHeight.lhMiddle0};
  }

  @media (min-width: 1200px) {
    line-height: ${ props => props.theme.lineHeight.lhMiddle0};
  }
`

export const SearchButton = styled.button `
  display: flex;
  justify-content: center;
  background-color: white;
  width: 20%;
  height: 1.3rem;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 3px;
  margin-left: 1rem;
  font-size: ${ props => props.theme.fontSize.fsMiddle0};

  @media (max-width: 575.98px) {
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontSize.fsXs1};
    margin-left: .1rem;
  }

  @media (min-width: 576px) {
    justify-content: center;
    align-items: center;
    font-size: ${ props => props.theme.fontSize.fsfsXs1};
    margin-left: .1rem;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${ props => props.theme.fontSize.fsSmall1}; 
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${ props => props.theme.fontSize.fsSmall1}; 
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content : space-between;
  align-items: flex-start;
  width: 100%;
`

export const GoogleImage = styled.p`
  color: ${props => props.theme.color.gray[0]};
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fontSize.Small0};

  @media (max-width: 575.98px) {
    font-size: ${props => props.theme.fontSize.fsXs1};
  }

  @media (min-width: 576px) {
    font-size: ${props => props.theme.fontSize.fsXs1};
  }

  @media (min-width: 768px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }

  @media (min-width: 1200px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0};
  }
`

export const SafedHours = styled.p`
  color: ${props => props.theme.color.gray[0]};
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.fontSize.fsSmall0};

  @media (max-width: 575.98px) {
    font-size: ${props => props.theme.fontSize.fsXs1};
  }

  @media (min-width: 576px) {
    font-size: ${props => props.theme.fontSize.fsXs1};
  }

  @media (min-width: 768px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0}; 
  }

  @media (min-width: 1200px) {
    font-size: ${ props => props.theme.fontSize.fsSmall0};
  }
`

export const SearchResult = styled.ul `
  background-color: white;
`

export const SearchList = styled.li `
  color: black;
`

/**
 * https://www.googleapis.com/customsearch/v1?key=AIzaSyAaLsnvAyqBWIVjMBOzw0DEQADgvPa0xwc&cx=003843309577069876842:stoc1spwaxe&q=google
 */
