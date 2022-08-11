import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/img/logo-coffee-delivery.svg'

import { HeaderContainer, GroupCart, Locale, Cart } from './styles'

interface HeaderProps {
  scroll: boolean
}

export function Header({ scroll }: HeaderProps) {
  return (
    <HeaderContainer scroll={scroll}>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logo} alt="logotipo coffee delivery" />
        </NavLink>
        <GroupCart>
          <Locale>
            <MapPin weight="fill" size={22} />
            Franca, SP
          </Locale>
          <NavLink to="/checkout" title="Concluir Pedido">
            <Cart>
              <ShoppingCart weight="fill" size={22} />
            </Cart>
          </NavLink>
        </GroupCart>
      </nav>
    </HeaderContainer>
  )
}
