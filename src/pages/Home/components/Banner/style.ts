import styled from 'styled-components'
import background from '../../../../assets/Background.svg'
import { devices } from '../../../../styles/devices'

const colorBannerItem = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  grey: 'base-text',
}

type IColorItemBanner = keyof typeof colorBannerItem

interface BannerItemProps {
  color: IColorItemBanner
}

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  width: 100%;
  height: 544px;
  padding: 3rem 5rem;
  background-image: url(${background});

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: ${(props) => props.theme['baloo-xl']};
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  h2 {
    font-size: ${(props) => props.theme['roboto-large']};
    font-weight: 400;
    font-style: normal;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`
export const DescriptionBanner = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageBanner = styled.img`
  width: 40%;
  height: 100%;
  @media ${devices.mobileL} {
    padding: 2rem;
    width: 100%;
  }
`

export const BannerItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: start;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

export const BannerItem = styled.div<BannerItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme[colorBannerItem[props.color]]};
    color: ${(props) => props.theme.background};

    padding: 0.5rem;

    border-radius: 50%;
  }

  p {
    font-size: ${(props) => props.theme['roboto-medium']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
