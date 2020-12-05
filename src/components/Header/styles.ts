import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.header`
  width: 100%;
  height: 160px;
`

export const Top = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.text};

  .content {
    max-width: 980px;
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;

      a {
        width: 40px;
        height: 40px;

        border-radius: 4px;
        background: ${({ theme }) => theme.colors.secondary};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 200ms;

        &:hover {
          filter: brightness(1.05);
        }

        &:first-child {
          background: ${({ theme }) => theme.colors.tertiary};
          margin-right: 15px;

          svg {
            fill: ${({ theme }) => darken(0.35, theme.colors.tertiary)};
          }
        }

        svg {
          width: 70%;
          height: 70%;

          fill: ${({ theme }) => darken(0.3, theme.colors.secondary)};
        }
      }
    }
  }
`

export const Bottom = styled.div`
  width: 100%;
  height: 60px;

  background: #fff;
`
