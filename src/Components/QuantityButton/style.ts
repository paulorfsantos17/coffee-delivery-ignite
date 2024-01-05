import styled from 'styled-components'

export const QuantityButtonContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  align-items: center;
  border-radius: 6px;

  input {
    width: 1.25rem;
    height: 1.25rem;
    border: none;
    background-color: transparent;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
