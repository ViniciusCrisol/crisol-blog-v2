import styled from 'styled-components'

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 60px 10px;

  display: flex;
  justify-content: space-between;

  > .content {
    max-width: 570px;
    width: 100%;
  }

  @media (max-width: 915px) {
    flex-direction: column-reverse;

    > .content {
      max-width: 660px;
      margin: 0 auto;
    }
  }
`

export const TabBar = styled.div`
  max-width: 295px;
  width: 100%;

  @media (max-width: 915px) {
    margin: 0 auto 30px;
    max-width: 660px;

    display: flex;
    align-items: center;
  }
`
