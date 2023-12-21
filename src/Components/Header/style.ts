import styled from 'styled-components'

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
export const LinkCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.5rem;
  cursor: pointer;
  border-radius: 6px;
`
