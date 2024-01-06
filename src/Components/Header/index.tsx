import {
  HeaderContainer,
  LinkCart,
  LinkLocale,
  MenuContainer,
  QuantityCart,
} from './style'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

export default function Header() {
  const { cart } = useCart()
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

        <LinkCart to="/cart">
          <ShoppingCart size={22} weight="fill" />
        </LinkCart>
        {cart.length > 0 ? <QuantityCart>{cart.length}</QuantityCart> : null}
      </MenuContainer>
    </HeaderContainer>
  )
}
