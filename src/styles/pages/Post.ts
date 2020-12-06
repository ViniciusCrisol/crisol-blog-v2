import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  max-width: 720px;

  margin: 0 auto;
  padding: 30px 20px 60px;

  .header {
    margin-bottom: 15px;
  }

  .main {
    h1 {
      font-size: 24px;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 18px;
      margin: 30px 0 10px;
    }

    p {
      text-align: justify;
      text-justify: inter-word;

      & + p {
        margin-top: 5px;
      }
    }

    pre {
      margin: 25px 0;
      padding: 20px 10px;
      border-radius: 4px;
      background: #1d2230;

      color: #fff;
      font-size: 14px;

      overflow-x: auto;
    }
  }
`
