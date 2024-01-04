import { ReactNode, createContext, useReducer } from 'react'
import { ICartItem, IOrder, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  decreaseItemToCartAction,
  incleaseItemToCartAction,
  removeItemToCartAction,
} from '../reducers/cart/action'

interface ICartContextProps {
  cart: ICartItem[]
  orders: IOrder[]
  addItem: (item: ICartItem) => void
  incleaseItemToCart: (id: string) => void
  decreaseItemToCart: (id: string) => void
  removeItemToCart: (id: string) => void
}

interface ICartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContextProps)

export default function CartProvider({ children }: ICartProviderProps) {
  const [cartStage, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
  })

  const { cart, orders } = cartStage

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

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        incleaseItemToCart,
        decreaseItemToCart,
        removeItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
