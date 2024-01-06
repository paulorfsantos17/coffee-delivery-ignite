import styled from 'styled-components'
import { devices } from '../../styles/devices'

export const SuccessContainer = styled.div`
  margin: 3rem 5rem;
  @media ${devices.mobileL} {
    margin: 2rem;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-size: ${({ theme }) => theme['baloo-large']};
    color: ${({ theme }) => theme['yellow-dark']};
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: ${({ theme }) => theme['roboto-medium']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const Content = styled.div`
  margin-top: 2.5rem;

  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 5rem;

  img {
    width: 50%;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`
export const Info = styled.div`
  display: flex;
  width: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
  border: 1px solid transparent;
  border-radius: 6px 36px;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.mobileL} {
    gap: 2rem;
  }

  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 6px 36px;
  padding: 2rem;
`

export const InfoDetail = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: ${({ theme }) => theme['roboto-xs']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  span {
    font-size: ${({ theme }) => theme['roboto-xs']};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

interface IIconInfoProps {
  color: 'yellow' | 'yellow-dark' | 'purple'
}

export const IconInfo = styled.div<IIconInfoProps>`
  display: flex;
  align-items: center;
  background-color: ${({ color, theme }) => theme[color]};
  padding: 8px;
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`
