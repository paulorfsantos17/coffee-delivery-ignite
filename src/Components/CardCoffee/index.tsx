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
          <QuatityButton />
          <ButtonAdd>
            <ShoppingCart size={22} weight="fill" />
          </ButtonAdd>
        </FormContainer>
      </FooterCard>
    </CardContainer>
  )
}
