import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem;
`

export const MenuContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
`
export const LinkLocale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  line-height: 1.3;
  font-size: ${(props) => props.theme['roboto-small']};

  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
`
export const LinkCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
  text-decoration: none;
`

export const QuantityCart = styled.p`
  width: 12px;
  height: 12px;
  z-index: 10;
  position: relative;
  right: 20px;
  top: -4px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-style: normal;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 700;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
