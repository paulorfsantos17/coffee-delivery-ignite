import { HeaderContainer, LinkCart, LinkLocale, MenuContainer } from './style'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo Coffee Delivery" />
      </Link>
      <MenuContainer>
        <LinkLocale>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LinkLocale>
        <LinkCart>
          <Link to="/cart">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </LinkCart>
      </MenuContainer>
    </HeaderContainer>
  )
}
