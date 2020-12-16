import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  cursor: pointer;

  padding: 15px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .top-side {
    width: 100%;
    height: 160px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};

    h4 {
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-size: 15px;
    }
  }

  .bottom-side {
    width: 100%;
    height: 30px;

    padding-top: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    .top-side {
      min-height: 100px;
      height: fit-content;
      padding-bottom: 10px;

      h4 {
        margin-bottom: 10px;
      }
    }
  }
`
