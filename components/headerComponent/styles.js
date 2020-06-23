import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 13rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.theme.root.MainBackgroundColor };
  color: ${ props => props.theme.fontColor.white };

    @media (max-width: 575.98px) {
          height: 6rem;
          font-size: ${ props => props.theme.fontSize.fsSmall1 };
          line-height: ${ props => props.theme.lineHeight.lhSmall0};
      }

    @media (min-width: 576px) {
        height: 6rem;
    }

    @media (min-width: 768px) {
        height: 6rem;
    }

    @media (min-width: 1200px) {
      height: 13rem;
    }
`

export const Headline = styled.h1` 
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${ props => props.theme.fontSize.fsBig };
  line-height: ${ props => props.theme.lineHeight.lhSmall0};

  @media (max-width: 575.98px) {
      height: 1rem;
      font-size: ${ props => props.theme.fontSize.fsMiddle0 };
  }

  @media (min-width: 576px) {
      height: 1rem;
      font-size: ${ props => props.theme.fontSize.fsMiddle0 };
  }

  @media (min-width: 768px) {
      height: 1rem;
      font-size: ${ props => props.theme.fontSize.fsMiddle1 };
  }

  @media (min-width: 1200px) {
    font-size: ${ props => props.theme.fontSize.fsBig };
  }

  p {
      display: flex;
      margin-right: 1rem;
      color: ${ props => props.theme.fontColor.white};
      
        @media (max-width: 575.98px) {
          margin-right: .1;
        }

        @media (min-width: 576px) {
          margin-right: .2rem;
        }

        @media (min-width: 768px) {
          margin-right: .4rem;
        }

        @media (min-width: 1200px) {
          margin-right: .75rem;
        }
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

    @media (max-width: 575.98px) {
      display: flex;
      align-items: center;
      height: 3rem;
      font-size: ${ props => props.theme.fontSize.fsSmall0 };
      line-height: ${ props => props.theme.lineHeight.lhSmall0};
      margin: .1rem;
    }

    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      height: 3rem;
      font-size: ${ props => props.theme.fontSize.fsSmall1 };
      margin: .1rem;
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      height: 3rem;
      font-size: ${ props => props.theme.fontSize.fsMiddle0 };
      margin: .1rem;
    }

    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
      height: 7rem;
      font-size: ${ props => props.theme.fontSize.fsMiddle1 };
      margin: 1rem 0 0rem 0;
    }
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

