import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 60px 10px;

  display: flex;
  justify-content: space-between;

  > div.content {
    max-width: 570px;
    width: 100%;
  }
`;

export const TabBar = styled.div`
  max-width: 250px;
  width: 100%;

  background: rgba(0, 0, 0, 0.15);
`;
