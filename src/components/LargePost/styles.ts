import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  height: 220px;

  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  div.left-side {
    height: 80%;

    background: #fff;
    padding: 10px 30px;
    border-right: 3px solid ${({ theme }) => theme.colors.primary};

    p {
      font-size: 16px;
      margin-top: 15px;
    }
  }

  div.right-side {
    width: 155px;
    height: 100%;

    padding: 25px 0;
    background: #fff;

    flex-shrink: 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    div.tag {
      width: 80%;
      height: 50px;

      background: ${({ theme }) => theme.colors.primary};

      color: #fff;
      font-size: 24px;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    min-height: 220px;
    height: unset;

    padding: 20px;
    justify-content: center;
    flex-direction: column-reverse;

    div.left-side {
      padding: 15px 0 0;
      border-right: 0;
    }

    div.right-side {
      width: 100%;
      height: unset;

      padding: unset;
      padding-bottom: 15px;
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

      flex-direction: row;

      div.tag {
        height: 40px;
        width: min-content;

        background: none;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`
