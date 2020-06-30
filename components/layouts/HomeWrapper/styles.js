import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 50%;
  height: 50%;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 575.98px) {
      margin-top: 25%;
  }

  @media (min-width: 576px) {
    margin-top: 25%;
  }

  @media (min-width: 768px) {
    margin-top: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 10%;
  }
`

export default HomeWrapper;