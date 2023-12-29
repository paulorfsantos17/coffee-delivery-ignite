import {
  SuccessContainer,
  Header,
  Content,
  Info,
  InfoContent,
  InfoDetail,
  DescriptionInfo,
  IconInfo,
} from './style'
import SuccessImage from '../../assets/sucessImage.png'
import { MapPin } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>
      <Content>
        <Info>
          <InfoContent>
            <InfoDetail>
              <IconInfo color="purple">
                <MapPin weight="fill" />
              </IconInfo>
              <DescriptionInfo>
                <p>
                  Entrega em <span> Rua João Daniel Martinelli, 102</span>{' '}
                  Farrapos - Porto Alegre, RS
                </p>
              </DescriptionInfo>
            </InfoDetail>
            <InfoDetail>
              <IconInfo color="yellow">
                <MapPin weight="fill" />
              </IconInfo>
              <DescriptionInfo>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min </span>
              </DescriptionInfo>
            </InfoDetail>
            <InfoDetail>
              <IconInfo color="yellow-dark">
                <MapPin weight="fill" />
              </IconInfo>
              <DescriptionInfo>
                <p>Pagamento na entrega</p>
                <span>Cartão de Crédito</span>
              </DescriptionInfo>
            </InfoDetail>
          </InfoContent>
        </Info>
        <img src={SuccessImage} alt="" />
      </Content>
    </SuccessContainer>
  )
}
