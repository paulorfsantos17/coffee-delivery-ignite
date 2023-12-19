import { HeaderContainer } from './style'
import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Coffee Delivery" />
      <div>
        <p>Local</p>
        <p>Carrinho</p>
      </div>
    </HeaderContainer>
  )
}
