import { IOrderInfo } from '../../contexts/CartProvider'
import { Actions, actionsTypes } from './action'

import { produce } from 'immer'

export interface ICartItem {
  id: string
  quantity: number
}
export interface IOrder extends IOrderInfo {
  id: number
  items: ICartItem[]
}

interface ICardState {
  cart: ICartItem[]
  orders: IOrder[]
}

export function cartReducer(state: ICardState, action: Actions) {
  switch (action.type) {
    case actionsTypes.ADD_ITEM: {
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })
    }
    case actionsTypes.INCLEASE_QUANTITY_ITEM: {
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.id,
        )
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity = itemAlreadyAdded?.quantity + 1
        }
      })
    }
    case actionsTypes.DECREASE_QUANTITY_ITEM: {
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.id,
        )
        if (itemAlreadyAdded && itemAlreadyAdded.quantity > 1) {
          itemAlreadyAdded.quantity = itemAlreadyAdded?.quantity - 1
        }
      })
    }
    case actionsTypes.REMOVE_QUANTITY_ITEM: {
      return produce(state, (draft) => {
        const listWithRemoveItem = draft.cart.filter(
          (item) => item.id !== action.payload.id,
        )
        draft.cart = listWithRemoveItem
      })
    }
    case actionsTypes.CHECKOUT: {
      return produce(state, (draft) => {
        const newOrder: IOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.data,
        }
        draft.orders.push(newOrder)
        draft.cart = []
        action.payload.navigate(`/order/${newOrder.id}/success`)
      })
    }

    default:
      return state
  }
}
