import { SearchbarWrapper, SearchbarInput, SearchWrapper, InputWrapper, SearchButton, TextWrapper, GoogleImage, SafedHours } from './styles'

export default function SearchbarComponent({
  type = "text",
  placeholder= "Type your search",
}) {
  return(
    <SearchbarWrapper>
      <SearchWrapper>
        <InputWrapper>
          <SearchbarInput type={type} placeholder={placeholder}/>
          <TextWrapper>
            <GoogleImage>Google</GoogleImage>
            <SafedHours>xxx Watt hours safed</SafedHours>
          </TextWrapper>
        </InputWrapper>
        <SearchButton>Search</SearchButton>
      </SearchWrapper>
    </SearchbarWrapper>
  )
}

