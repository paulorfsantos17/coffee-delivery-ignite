import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  padding: 0 1.25rem;

  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    margin-top: -20px;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme['roboto-medium']};
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;

    margin-top: 1rem;
  }
`

export const TitleCard = styled.p`
  font-size: ${(props) => props.theme['roboto-xs']};
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  line-height: 1.3;
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.25rem;
  margin-top: 0.5rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`
export const FooterCard = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`

export const Price = styled.p`
  font-size: ${(props) => props.theme['roboto-small']};
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme['baloo-small']};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const FormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
`
export const ButtonAdd = styled.button`
  padding: 0.5rem;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  border: none;
  border-radius: 6px;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
