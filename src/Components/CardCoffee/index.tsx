import { ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  FooterCard,
  Tags,
  Price,
  TitleCard,
  FormContainer,
  ButtonAdd,
} from './style'
import { QuatityButton } from '../QuantityButton'
import { MouseEvent, useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'

interface ICoffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface ICardCoffeeProps {
  coffee: ICoffee
}

export function CardCoffee({ coffee }: ICardCoffeeProps) {
  const { addItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(0)

  const addQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const increaseQuantity = () => {
    setQuantity((prev) => prev - 1)
  }

  const handleAddItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addItem({
      id: coffee.id,
      quantity,
    })
    setQuantity(0)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.title}</h3>
      <TitleCard>{coffee.description}</TitleCard>
      <FooterCard>
        <Price>
          R$ <span>9,90</span>
        </Price>
        <FormContainer>
          <QuatityButton
            addQuantity={addQuantity}
            increaseQuantity={increaseQuantity}
            quantity={quantity}
          />
          <ButtonAdd onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonAdd>
        </FormContainer>
      </FooterCard>
    </CardContainer>
  )
}
