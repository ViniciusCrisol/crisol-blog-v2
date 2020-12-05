import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;

  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & + div {
    margin-top: 30px;
  }

  .header {
    height: 45px;
    background: ${({ theme }) => theme.colors.text};

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 915px) {
    & + div {
      margin-top: unset;
      margin-left: 15px;
    }
  }
`
