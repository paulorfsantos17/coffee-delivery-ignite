import styled from 'styled-components'

interface IInputContainer {
  gridArea: string | undefined
  error: boolean
}

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid;

    border-radius: 6px;

    transition: 0.3s;

    &[data-state='focused'] {
      border-color: ${({ error, theme }) =>
        error ? 'red' : theme['base-button']};
    }

    &[data-state='blurred'] {
      border-color: ${({ error, theme }) =>
        error ? 'red' : theme['base-button']};
    }

    span {
      font-size: ${({ theme }) => theme['roboto-xs']};
      font-style: italic;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-label']};
    }
  }

  input {
    width: 100%;
    border: none;
    background-color: transparent;

    border-radius: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  input:focus {
    outline: none;
    box-shadow: none;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  font-size: 0.6rem;
  color: red;
  font-weight: 400;
`
