import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './style'

export function QuatityButton() {
  return (
    <QuantityButtonContainer>
      <button>
        <Plus />
      </button>
      <input type="text" value={1} disabled />
      <button>
        <Minus />
      </button>
    </QuantityButtonContainer>
  )
}
