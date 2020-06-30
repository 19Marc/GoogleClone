import Link from 'next/link'

import { FooterWrapper, FooterLinks } from './styles'

export default function Footer({
  symbol = "&",
}) {
  return (
    <FooterWrapper>
      <Link href="/" as="/home" passHref>
        <FooterLinks>AboutFakle</FooterLinks>
      </Link>
      <FooterLinks>Fakele Toolbar</FooterLinks>
      <FooterLinks>Privacy {symbol} Terms</FooterLinks>
      <FooterLinks>More Countries +</FooterLinks>
      <Link href="/SearchResults" as="/search/search-result" passHref>
        <FooterLinks>NextPage</FooterLinks>
      </Link>
    </FooterWrapper>
  )
}
