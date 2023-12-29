import { ReactNode, createContext, useReducer } from 'react'
import { ICartItem, IOrder, cartReducer } from '../reducers/cart/reducer'
import { AddItemAction } from '../reducers/cart/action'

interface ICartContextProps {
  cart: ICartItem[]
  orders: IOrder[]
  addItem: (item: ICartItem) => void
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
    dispatch(AddItemAction(item))
  }

  return (
    <CartContext.Provider value={{ cart, orders, addItem }}>
      {children}
    </CartContext.Provider>
  )
}
