import styled from 'styled-components'

export const SearchbarWrapper = styled.div`
  background-color: black;
  color: black;
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`

export const SearchbarInput = styled.input`
  display: flex;
  justify-content: center;
  width: 80%;
  border: 1px solid #666;
  border-radius: 3px;
  /* margin: 30px 0 0; */
  padding: 3px;
  line-height: 18px;
  outline: none;
`

export const SearchButton = styled.div `
  display: flex;
  justify-content: center;
  background-color: white;
  width: 20%;
  height: 26px;
  border: 1px solid #666;
  border-radius: 3px;
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content : space-between
`

export const GoogleImage = styled.p`
color: #999;
margin: 0 100px 0 0;
padding: 0;
font-size: 12px;
`

export const SafedHours = styled.p`
color: #999;
margin: 0 123px 0 0;
padding: 0;
font-size: 12px;
`