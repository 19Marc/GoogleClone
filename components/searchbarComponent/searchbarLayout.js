import { SearchbarWrapper, SearchbarInput, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours } from './styles'

export default function SearchbarComponent({
  type = "text",
  placeholder= "Type your search",
}) {
  return(
    <SearchbarWrapper>
      <InputWrapper>
        <SearchbarInput type={type} placeholder={placeholder}/>
        <SearchButton>Search</SearchButton>
      </InputWrapper>
      <TextWrapper>
        <GoogleImage>Google</GoogleImage>
        <SafedHours>xxx Watt hours safed</SafedHours>
      </TextWrapper>
    </SearchbarWrapper>
  )
}

