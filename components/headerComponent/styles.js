import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  /* height: 150px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`

export const Headline = styled.h1` 
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white; 
  font-size: 42px;
  line-height: 14px;

  p {
      display: flex;
      margin-right: 1.5%;
    }

  a {
    display: flex;
    justify-content: center;
    color: blue;
    text-decoration: none;

  }
`

export const Description = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  font-size: 32px;
  line-height: 14px;
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

