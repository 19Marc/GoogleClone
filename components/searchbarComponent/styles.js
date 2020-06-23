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

export const InputWrapper = styled.div`
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
  width: 100%;
  border: 1px solid #666;
  border-radius: 3px;
  /* margin: 30px 0 0; */
  padding: 3px;
  line-height: ${ props => props.theme.lineHeight.lhSmall0};
  outline: none;
`

export const SearchButton = styled.div `
  display: flex;
  justify-content: center;
  background-color: white;
  width: 19%;
  height: 1.275rem;
  border: 1px solid #666;
  border-radius: 3px;
  margin-left: 1rem;
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
font-size: ${props => props.theme.fontSize.fsSmall0};
`

export const SafedHours = styled.p`
color: ${props => props.theme.color.gray[0]};
margin: 0;
padding: 0;
font-size: ${props => props.theme.fontSize.fsSmall0};
`