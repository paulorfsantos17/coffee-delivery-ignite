import styled from 'styled-components'
interface RadioContainerProps {
  error?: boolean
}

export const RadioContainer = styled.label<RadioContainerProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  background-color: ${({ theme }) => theme['base-button']};
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid;
  transition: all 0.2s;
  border-color: ${({ error }) => (error ? 'red' : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme.purple};
  }

  input {
    display: none;
  }

  svg {
    height: 1rem;
    width: 1rem;
    color: ${({ theme }) => theme.purple};
  }

  span {
    font-size: ${({ theme }) => theme['roboto-xs']};
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`
