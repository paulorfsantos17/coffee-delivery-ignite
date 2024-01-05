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
import { useParams } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams()

  const order = orders.find((order) => {
    return order?.id === Number(orderId)
  })
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  if (!order?.id) {
    return null
  }

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
                  Entrega em <span>{order?.street}</span>
                  <br />
                  {`${order?.city} - ${order?.state}`}
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
                <span>{paymentMethod[order?.paymentMethod]}</span>
              </DescriptionInfo>
            </InfoDetail>
          </InfoContent>
        </Info>
        <img src={SuccessImage} alt="" />
      </Content>
    </SuccessContainer>
  )
}
