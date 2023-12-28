import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    height: 20%;
    width: 20%;
  }
`

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  span {
    font-size: ${({ theme }) => theme['roboto-xs']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`
export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['base-button']};

  font-size: ${({ theme }) => theme['roboto-xs']};
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;
  color: ${({ theme }) => theme['base-text']};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme['base-subtitle']};
    background-color: ${({ theme }) => theme['base-hover']};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.purple};
    transition: 0.3s;
  }
`

export const Price = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
