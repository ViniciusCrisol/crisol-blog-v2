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
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Post = styled.div<IPost>`
  width: 277px;

  padding: 15px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .top-side {
    width: 100%;
    height: 160px;

    border-bottom: 3px solid ${({ color }) => color};

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
  }
`;
