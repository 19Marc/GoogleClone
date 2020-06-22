import { FooterWrapper, FooterLinks } from './styles'

export default function FooterComponent({
  symbol = "&",
}) {
  return (
    <FooterWrapper>
      <FooterLinks>AboutFakle</FooterLinks>
      <FooterLinks>Fakele Toolbar</FooterLinks>
      <FooterLinks>Privacy {symbol} Terms</FooterLinks>
      <FooterLinks>More Countries +</FooterLinks>
    </FooterWrapper>
  )
}

