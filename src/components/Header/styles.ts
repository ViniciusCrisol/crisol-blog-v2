import styled from 'styled-components';
import { VscSourceControl } from 'react-icons/vsc';

export const Container = styled.header`
  width: 100%;
  height: 160px;
`;

export const Top = styled.div`
  width: 100%;
  height: 100px;

  background: ${({ theme }) => theme.colors.secondary};

  .content {
    max-width: 980px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    .logo-container {
      padding: 8px;
      border-radius: 4px;
      background: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 60px;

  background: #fff;
`;

export const Logo = styled(VscSourceControl)`
  width: 30px;
  height: 30px;

  fill: ${({ theme }) => theme.colors.primary};
`;
