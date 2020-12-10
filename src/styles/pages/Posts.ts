import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 590px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const InputContainer = styled.form`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  input {
    height: 40px;
    flex: 1;

    border: none;
    padding: 0 15px;
  }

  button {
    width: 80px;
    height: 40px;

    border: none;
    background: ${({ theme }) => theme.colors.primary};

    color: #fff;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: filter 200ms;

    &:hover {
      filter: brightness(1.03);
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
`
