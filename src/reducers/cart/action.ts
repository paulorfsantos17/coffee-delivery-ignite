import { ICartItem } from './reducer'

export enum actionsTypes {
  ADD_ITEM = 'ADD_ITEM',
}

export type Actions = {
  type: actionsTypes.ADD_ITEM
  payload: {
    item: ICartItem
  }
}

export function AddItemAction(item: ICartItem) {
  return {
    type: actionsTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}
