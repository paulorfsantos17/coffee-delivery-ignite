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
  return <CardContainer>{coffee.title}</CardContainer>
}
