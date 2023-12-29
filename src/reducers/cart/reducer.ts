import { Actions, actionsTypes } from './action'

import { produce } from 'immer'

export interface ICartItem {
  id: string
  quantity: number
}
export interface IOrder {
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

    default:
      return state
  }
}
