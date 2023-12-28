import { QuatityButton } from '../QuantityButton'
import { coffees } from '../../../data.json'
import {
  CartItemContainer,
  DescriptionItem,
  Price,
  RemoveButton,
} from './style'
import { Trash } from 'phosphor-react'

export default function CartItem() {
  return (
    <CartItemContainer>
      <img src={coffees[0].image} alt="img" />
      <DescriptionItem>
        <span>{coffees[0].title}</span>
        <div>
          <QuatityButton />
          <RemoveButton>
            <Trash />
            Remover
          </RemoveButton>
        </div>
      </DescriptionItem>
      <Price>R$ 9,90</Price>
    </CartItemContainer>
  )
}
