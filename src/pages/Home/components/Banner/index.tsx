import {
  DescriptionBanner,
  ImageBanner,
  BannerContainer,
  BannerItem,
  BannerItemContainer,
} from './style'
import BannerImage from '../../../../assets/BannerImage.png'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export default function Banner() {
  return (
    <BannerContainer>
      <DescriptionBanner>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <BannerItemContainer>
          <BannerItem color="yellowDark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>

            <p>Compra simples e segura</p>
          </BannerItem>
          <BannerItem color="grey">
            <div>
              <Package size={16} weight="fill" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </BannerItem>
          <BannerItem color="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </BannerItem>
          <BannerItem color="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <p>O café chega fresquinho até você</p>
          </BannerItem>
        </BannerItemContainer>
      </DescriptionBanner>
      <ImageBanner src={BannerImage} />
    </BannerContainer>
  )
}
