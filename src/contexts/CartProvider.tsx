import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { ICartItem, IOrder, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutAction,
  decreaseItemToCartAction,
  incleaseItemToCartAction,
  removeItemToCartAction,
} from '../reducers/cart/action'
import { NavigateFunction } from 'react-router-dom'

interface ICartProviderProps {
  children: ReactNode
}

export interface IOrderInfo {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface ICartContextProps {
  cart: ICartItem[]
  orders: IOrder[]
  addItem: (item: ICartItem) => void
  incleaseItemToCart: (id: string) => void
  decreaseItemToCart: (id: string) => void
  removeItemToCart: (id: string) => void
  checkout: (data: IOrderInfo, navigate: NavigateFunction) => void
}

export const CartContext = createContext({} as ICartContextProps)

export default function CartProvider({ children }: ICartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const { cart, orders } = cartState

  function addItem(item: ICartItem) {
    dispatch(addItemAction(item))
  }

  function incleaseItemToCart(id: string) {
    dispatch(incleaseItemToCartAction(id))
  }

  function decreaseItemToCart(id: string) {
    dispatch(decreaseItemToCartAction(id))
  }

  function removeItemToCart(id: string) {
    dispatch(removeItemToCartAction(id))
  }

  function checkout(data: IOrderInfo, navigate: NavigateFunction) {
    dispatch(checkoutAction(data, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        incleaseItemToCart,
        decreaseItemToCart,
        removeItemToCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
