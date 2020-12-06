import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 40px 0;
  }

  p {
    font-size: 24px;
    margin-top: 8px;
  }
`

export const Posts = styled.div`
  margin-top: 30px;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
`
