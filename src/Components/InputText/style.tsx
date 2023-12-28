import styled from 'styled-components'

interface IInputContainer {
  gridArea: string | undefined
}

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;

    transition: 0.3s;

    &[data-state='focused'] {
      border-color: ${({ theme }) => theme['yellow-dark']};
    }

    &[data-state='blurred'] {
      border-color: ${({ theme }) => theme['base-button']};
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
