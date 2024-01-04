import styled from 'styled-components'

export const ContainerCart = styled.div`
  padding: 1rem 5rem;
  display: flex;

  gap: 2rem;
`

export const TitleCard = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme['baloo-xs']};
  color: ${(props) => props.theme['base-subtitle']};
  text-align: left;
`

export const ContainerLocale = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const SectionForm = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  gap: 32px;
  background-color: ${(props) => props.theme['base-card']};
`

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: 40% 50% 10%;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 0.75rem;

  grid-template-areas:
    'zip . .'
    'road road road'
    'number complement complement'
    'district city state';
`

interface IHeaderProps {
  type: 'payment' | 'place'
}
export const HeaderForm = styled.header<IHeaderProps>`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: ${(props) => props.theme['roboto-medium']};
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 130%;
      font-weight: 400;
    }
    p {
      font-size: ${(props) => props.theme['roboto-small']};
      color: ${(props) => props.theme['base-text']};
      line-height: 130%;
      font-weight: 400;
    }
  }

  svg {
    height: 22px;
    width: 22px;
    color: ${(props) =>
      props.type === 'payment'
        ? props.theme.purple
        : props.theme['yellow-dark']};
  }
`

export const PaymentContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;
`

export const CartAside = styled.aside`
  width: 80%;
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem 1rem;
`
export const DescriptionPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
`
export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    text-align: center;
  }
`

interface IDescriptionPriceProps {
  isTotalPrice?: boolean
}

export const DescriptionPrice = styled.div<IDescriptionPriceProps>`
  display: flex;
  justify-content: space-between;
  font-style: normal;

  span:first-child {
    font-size: ${({ isTotalPrice, theme }) =>
      isTotalPrice ? theme['roboto-medium'] : theme['roboto-xs']};

    color: ${({ isTotalPrice, theme }) =>
      isTotalPrice ? theme['base-subtitle'] : theme['base-text']};
    font-weight: ${({ isTotalPrice }) => (isTotalPrice ? '700' : '400')};

    line-height: 130%;
  }

  span:last-child {
    font-size: ${({ isTotalPrice, theme }) =>
      isTotalPrice ? theme['roboto-medium'] : theme['roboto-small']};

    color: ${({ isTotalPrice, theme }) =>
      isTotalPrice ? theme['base-subtitle'] : theme['base-text']};
    font-weight: ${({ isTotalPrice }) => (isTotalPrice ? '700' : '400')};

    line-height: 130%;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.yellow};
  margin-top: 1.5rem;

  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme['roboto-medium']};
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
