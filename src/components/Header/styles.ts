import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.header`
  width: 100%;
  height: 65px;

  padding: 0 10px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .content {
    max-width: 680px;
    width: 100%;
    height: 100%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      align-items: center;
    }

    .links {
      display: flex;
      align-items: center;

      a {
        width: 70px;
        height: 40px;

        border-radius: 4px;
        background: ${({ theme }) => theme.colors.secondary};

        font-weight: 600;
        color: ${({ theme }) => darken(0.3, theme.colors.secondary)};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        transition: filter 200ms;

        &:hover {
          filter: brightness(1.03);
        }

        &:first-child {
          margin-right: 15px;
          background: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => darken(0.35, theme.colors.tertiary)};
        }
      }
    }
  }
`
