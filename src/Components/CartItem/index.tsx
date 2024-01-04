import { QuatityButton } from '../QuantityButton'
import {
  CartItemContainer,
  DescriptionItem,
  Price,
  RemoveButton,
} from './style'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { ICoffee } from '../CardCoffee'

interface ICoffeeCartItem extends ICoffee {
  quantity: number
}

interface ICartItemProps {
  cartItem: ICoffeeCartItem
}

export default function CartItem({ cartItem }: ICartItemProps) {
  const { incleaseItemToCart, decreaseItemToCart, removeItemToCart } =
    useContext(CartContext)
  const { id, image, price, quantity, title } = cartItem

  const increaseQuantity = () => {
    incleaseItemToCart(id)
  }
  const decreaseQuantity = () => {
    decreaseItemToCart(id)
  }
  const handleRemoveItem = () => {
    removeItemToCart(id)
  }

  return (
    <CartItemContainer>
      <img src={image} alt="img" />
      <DescriptionItem>
        <span>{title}</span>
        <div>
          <QuatityButton
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <RemoveButton onClick={handleRemoveItem}>
            <Trash />
            Remover
          </RemoveButton>
        </div>
      </DescriptionItem>
      <Price>
        {new Intl.NumberFormat('pr-br', {
          currency: 'BRL',
          style: 'currency',
        }).format(quantity * price)}
      </Price>
    </CartItemContainer>
  )
}
