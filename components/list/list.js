import { ListWrapper, UL, LI, LIP, LIH3, LIA } from './styles'

export default function List() {
    return (
      <ListWrapper>
        <UL>
          <LI><LIH3>TEST</LIH3></LI>
          <LI><LIP>TESTTEST</LIP></LI>
          <LI><LIA>TESTTESTTEST</LIA></LI>
        </UL>
      </ListWrapper>
    )
  }