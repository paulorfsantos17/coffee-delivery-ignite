import Banner from './components/Banner'
import { Container, ContainerCoffee, TitleHome } from './style'
import { coffees } from '../../../data.json'
import { CardCoffee } from '../../Components/CardCoffee'
export function Home() {
  return (
    <Container>
      <Banner />
      <TitleHome>Nossos cafés</TitleHome>
      <ContainerCoffee>
        {coffees.map((coffee) => (
          <CardCoffee coffee={coffee} key={coffee.id} />
        ))}
      </ContainerCoffee>
    </Container>
  )
}
