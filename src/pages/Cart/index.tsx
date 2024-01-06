import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

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
  ErrorMessage,
  FormContainer,
  HeaderForm,
  PaymentContent,
  SectionForm,
  TitleCard,
} from './style'
import { InputText } from '../../Components/InputText'
import { RadioInput } from '../../Components/RadioInput'
import CartItem from '../../Components/CartItem'
import { coffees } from '../../../data.json'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../../hooks/useCart'

interface FormInputs {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}
const newOrder = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})
export function Cart() {
  const { cart, checkout } = useCart()
  const navigate = useNavigate()

  const coffeesInCart = cart.map((cartItem) => {
    const coffeeInfo = coffees.find((coffee) => cartItem.id === coffee.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: cartItem.quantity,
    }
  })

  const totalItensPrice = coffeesInCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0,
  )

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const deliveryValue = 3.5
  const selectedPaymentMethod = watch('paymentMethod')
  const isPaymentError = !!errors.paymentMethod
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    console.log('teste')
    if (cart.length <= 0) {
      return
    }

    checkout(data, navigate)
  }

  return (
    <ContainerCart>
      <FormContainer id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
        <ContainerLocale>
          <TitleCard>Complete seu pedido</TitleCard>

          <SectionForm>
            <HeaderForm type="place">
              <MapPinLine />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </HeaderForm>

            <ContentForm>
              <InputText
                placeholder="CEP"
                gridArea="zip"
                error={errors.cep}
                {...register('cep')}
              />
              <InputText
                placeholder="Rua"
                gridArea="road"
                error={errors.street}
                {...register('street')}
              />
              <InputText
                placeholder="Número"
                gridArea="number"
                error={errors.number}
                {...register('number')}
              />
              <InputText
                error={errors.fullAddress}
                placeholder="Complemento"
                gridArea="complement"
                optional
                {...register('fullAddress')}
              />
              <InputText
                placeholder="Bairro"
                gridArea="district"
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <InputText
                error={errors.city}
                placeholder="Cidade"
                gridArea="city"
                {...register('city')}
              />
              <InputText
                error={errors.state}
                placeholder="UF"
                gridArea="state"
                {...register('state')}
              />
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
              <RadioInput
                error={isPaymentError}
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard />
                <span>Cartão de crédito</span>
              </RadioInput>
              <RadioInput
                error={isPaymentError}
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank />
                <span>cartão de débito</span>
              </RadioInput>
              <RadioInput
                error={isPaymentError}
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money />
                <span>dinheiro</span>
              </RadioInput>
              {errors.paymentMethod ? (
                <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
              ) : null}
            </PaymentContent>
          </SectionForm>
        </ContainerLocale>
        <CartAside>
          <TitleCard>Cafés selecionados</TitleCard>
          <ContentCard>
            <CardItemContainer>
              {coffeesInCart.length > 0 ? (
                coffeesInCart.map((itemCart) => (
                  <CartItem key={itemCart.id} cartItem={itemCart} />
                ))
              ) : (
                <p>Não há itens no carrinho.</p>
              )}
            </CardItemContainer>
            <DescriptionPriceContainer>
              <DescriptionPrice>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat('pr-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItensPrice)}
                </span>
              </DescriptionPrice>
              <DescriptionPrice>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat('pr-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(deliveryValue)}
                </span>
              </DescriptionPrice>
              <DescriptionPrice isTotalPrice>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('pr-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(deliveryValue + totalItensPrice)}
                </span>
              </DescriptionPrice>
            </DescriptionPriceContainer>
            <CheckoutButton type="submit">confirmar pedido</CheckoutButton>
          </ContentCard>
        </CartAside>
      </FormContainer>
    </ContainerCart>
  )
}
