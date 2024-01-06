import styled from 'styled-components'
import { devices } from '../../styles/devices'

export const Container = styled.div`
  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
  }
`

export const TitleHome = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme['baloo-large']};
  font-weight: 800;
  line-height: 1.3;
  padding-left: 5rem;
  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    margin-top: 20rem;
    padding: 2rem;
  }
`
export const ContainerCoffee = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 3.375rem 5rem;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;

    padding: 2rem;
  }
`
