import { HeaderWrapper, Headline, Description } from './styles'

export default function HeaderComponent({
textUrl = "https://nextjs.org",
}) {
  return (
    <HeaderWrapper>
      <Headline>
        <p> Welcome to </p> <a href={ textUrl }>GoogleClone</a>
      </Headline>

      <Description>
        We will solve your Problem
      </Description>
    </HeaderWrapper>
  )
}