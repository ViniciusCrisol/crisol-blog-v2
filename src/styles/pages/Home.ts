import styled from 'styled-components';

interface IPost {
  color: string;
}

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

export const Posts = styled.div`
  margin-top: 30px;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Post = styled.div<IPost>`
  width: 180px;
  height: 200px;

  box-shadow: ${({ theme }) => theme.boxShadow};

  .top-side {
    width: 100%;
    height: 140px;
    background: ${({ color }) => color};
  }

  .bottom-side {
    width: 100%;
    height: 60px;

    background: #fff;
  }
`;
