import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;

  h2 {
    margin: 0 auto;
    max-width: 445px;
  }

  span {
    display: block;
    margin-top: 15px;

    a {
      font-weight: 600;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
