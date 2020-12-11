import styled from 'styled-components'

export const Container = styled.div`
  p {
    margin-top: 5px;
    text-align: justify;
    text-justify: inter-word;

    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
