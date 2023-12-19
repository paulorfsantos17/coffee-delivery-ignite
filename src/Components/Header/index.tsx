import { HeaderContainer, LinkCart, LinkLocale, MenuContainer } from './style'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Coffee Delivery" />
      <MenuContainer>
        <LinkLocale>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LinkLocale>
        <LinkCart>
          <ShoppingCart size={22} weight="fill" />
        </LinkCart>
      </MenuContainer>
    </HeaderContainer>
  )
}
