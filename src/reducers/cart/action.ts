import { ICartItem } from './reducer'

export enum actionsTypes {
  ADD_ITEM = 'ADD_ITEM',
  INCLEASE_QUANTITY_ITEM = 'INCLEASE_QUANTITY_ITEM',
  DECREASE_QUANTITY_ITEM = 'DECREASE_QUANTITY_ITEM',
  REMOVE_QUANTITY_ITEM = 'REMOVE_QUANTITY_ITEM',
}

export type Actions =
  | {
      type: actionsTypes.ADD_ITEM
      payload: {
        item: ICartItem
      }
    }
  | {
      type:
        | actionsTypes.INCLEASE_QUANTITY_ITEM
        | actionsTypes.DECREASE_QUANTITY_ITEM
        | actionsTypes.REMOVE_QUANTITY_ITEM
      payload: {
        id: string
      }
    }

export function addItemAction(item: ICartItem) {
  return {
    type: actionsTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function incleaseItemToCartAction(id: string) {
  return {
    type: actionsTypes.INCLEASE_QUANTITY_ITEM,
    payload: {
      id,
    },
  } satisfies Actions
}

export function decreaseItemToCartAction(id: string) {
  return {
    type: actionsTypes.DECREASE_QUANTITY_ITEM,
    payload: {
      id,
    },
  } satisfies Actions
}

export function removeItemToCartAction(id: string) {
  return {
    type: actionsTypes.REMOVE_QUANTITY_ITEM,
    payload: {
      id,
    },
  } satisfies Actions
}
