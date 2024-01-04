import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CardItemContainer,
  CartAside,
  CheckoutButton,
  ContainerCart,
  ContainerLocale,
  ContentCard,
  ContentForm,
  DescriptionPrice,
  DescriptionPriceContainer,
  FormContainer,
  HeaderForm,
  PaymentContent,
  SectionForm,
  TitleCard,
} from './style'
import { InputText } from '../../Components/InputText'
import { RadioInput } from '../../Components/RadioInput'
import CartItem from '../../Components/CartItem'
import { CartContext } from '../../contexts/CartProvider'
import { useContext } from 'react'
import { coffees } from '../../../data.json'

export function Cart() {
  const { cart } = useContext(CartContext)

  const CoffeesInCart = cart.map((cartItem) => {
    const coffeeInfo = coffees.find((coffee) => cartItem.id === coffee.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: cartItem.quantity,
    }
  })

  return (
    <ContainerCart>
      <ContainerLocale>
        <TitleCard>Complete seu pedido</TitleCard>
        <FormContainer>
          <SectionForm>
            <HeaderForm type="place">
              <MapPinLine />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </HeaderForm>

            <ContentForm>
              <InputText placeholder="CEP" gridArea="zip" />
              <InputText placeholder="Rua" gridArea="road" />
              <InputText placeholder="Número" gridArea="number" />
              <InputText
                placeholder="Complemento"
                gridArea="complement"
                optional
              />
              <InputText placeholder="Bairro" gridArea="district" />
              <InputText placeholder="Cidade" gridArea="city" />
              <InputText placeholder="UF" gridArea="state" />
            </ContentForm>
          </SectionForm>
          <SectionForm>
            <HeaderForm type="payment">
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeaderForm>
            <PaymentContent>
              <RadioInput isSelected={false}>
                <CreditCard />
                <span>Cartão de crédito</span>
              </RadioInput>
              <RadioInput isSelected={false}>
                <Bank />
                <span>cartão de débito</span>
              </RadioInput>
              <RadioInput isSelected={false}>
                <Money />
                <span>dinheiro</span>
              </RadioInput>
            </PaymentContent>
          </SectionForm>
        </FormContainer>
      </ContainerLocale>
      <CartAside>
        <TitleCard>Cafés selecionados</TitleCard>
        <ContentCard>
          <CardItemContainer>
            {CoffeesInCart.length > 0 ? (
              CoffeesInCart.map((itemCart) => (
                <CartItem key={itemCart.id} cartItem={itemCart} />
              ))
            ) : (
              <p>Não há itens no carrinho.</p>
            )}
          </CardItemContainer>
          <DescriptionPriceContainer>
            <DescriptionPrice>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </DescriptionPrice>
            <DescriptionPrice>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </DescriptionPrice>
            <DescriptionPrice isTotalPrice>
              <span>Total</span>
              <span>R$ 33,20</span>
            </DescriptionPrice>
          </DescriptionPriceContainer>
          <CheckoutButton>confirmar pedido</CheckoutButton>
        </ContentCard>
      </CartAside>
    </ContainerCart>
  )
}
