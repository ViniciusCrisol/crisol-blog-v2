import styled from 'styled-components';

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
`;

export const HighlightPost = styled.div`
  width: 100%;
  height: 250px;

  position: relative;
  background: #f38181;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div.right-side {
    width: 160px;
    height: 100%;

    background: #fff;
  }
`;
