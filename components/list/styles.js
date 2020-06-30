import styled from 'styled-components'


// ${ props => props.theme.root.MainBackgroundColor };

export const ListWrapper = styled.div `
  width: 100%;
  background-color: yellow;
`

export const UL = styled.ul `
  background-color: ${ props => props.theme.color.black };
  color: ${ props => props.theme.fontColor.white };
  list-style: none;
  margin: 2rem 1rem 2rem 1rem;
  padding: 0;
`

export const LI = styled.li `
  background-color: ${ props => props.theme.color.black };
  color: ${ props => props.theme.fontColor.white };
  margin: 0 0 1.5rem 0;
  padding: 0;
`

export const LIH3 = styled.h3 `
  color: white;
  font-size: ${ props => props.theme.fontSize.fsSmall1 };
  line-height: ${ props => props.theme.lineHeight.lhMiddle2 };
  margin: 0;
  padding: 0;
`

export const LIP = styled.p `
  color: white;
  font-size: ${ props => props.theme.fontSize.fsSmall0 };
  line-height: ${ props => props.theme.lineHeight.lhMiddle1 };
  margin: 0;
  padding: 0;
`

export const LIA = styled.a `
  color: white;
  font-size: ${ props => props.theme.fontSize.fsSmall0 };
  line-height: ${ props => props.theme.lineHeight.lhMiddle1 };
  margin: 0;
  padding: 0;
`