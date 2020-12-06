import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  height: 220px;

  position: relative;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  div.left-side {
    height: 100%;
    padding: 25px 45px;

    h2 {
      color: #fff;
    }

    p {
      color: #fff;
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
`
