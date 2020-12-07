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
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
`
