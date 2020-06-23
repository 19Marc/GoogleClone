import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  /* height: 150px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.theme.root.MainBackgroundColor };
  color: ${ props => props.theme.fontColor.white };
`

export const Headline = styled.h1` 
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${ props => props.theme.fontSize.fsBig }; ;
  line-height: ${ props => props.theme.lineHeight.lhSmall0};

  p {
      display: flex;
      margin-right: 1rem;
      color: ${ props => props.theme.fontColor.white}; 
    }

  a {
    display: flex;
    justify-content: center;
    color: ${ props => props.theme.fontColor.blue};
    text-decoration: none;

  }
`

export const Description = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${ props => props.theme.fontColor.white};
  font-size: ${ props => props.theme.fontSize.fsMiddle };
  line-height: ${ props => props.theme.lineHeight.lhSmall0};
  margin-bottom: 4rem;
`

// const HeaderContainer = ({ children, className}) => (
//   <div>
//     {Title}
//   </div>
// )

// export default styled(HeaderContainer)`
//   width: 100%;
//   height: 150px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: purple;
//   color: white;
// `

// export const Title = styled.title`
//   display: block;
//   text-align: left;
//   width: 100%;
//   color: black;
//   font-weight: bold;
// `;

