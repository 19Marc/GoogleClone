import { SearchbarWrapper, SearchbarInput, TextWrapper, GoogleImage, SafedHours } from './styles'

export default function SearchbarComponent({
  type = "text",
  placeholder= "Type your search",
}) {
  return(
    <SearchbarWrapper>
      <SearchbarInput type={type} placeholder={placeholder}/>
      <TextWrapper>
        <GoogleImage>Google</GoogleImage>
        <SafedHours>xxx Watt hours safed</SafedHours>
      </TextWrapper>
    </SearchbarWrapper>
  )
}

