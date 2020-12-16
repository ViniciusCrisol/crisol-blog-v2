import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 590px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Posts = styled.div`
  margin-top: 30px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
