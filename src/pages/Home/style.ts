import styled from 'styled-components'

export const TitleHome = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: ${(props) => props.theme['baloo-large']};
  font-weight: 800;
  line-height: 1.3;
  padding-left: 5rem;
`
export const ContainerCoffee = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 3.375rem 5rem;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
