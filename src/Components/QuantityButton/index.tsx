import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './style'
import { MouseEvent } from 'react'
interface IQuatityButtonProps {
  addQuantity: () => void
  increaseQuantity: () => void
  quantity: number
}
export function QuatityButton({
  addQuantity,
  increaseQuantity,
  quantity,
}: IQuatityButtonProps) {
  const handleAddQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addQuantity()
  }
  const handleIncreaseQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    increaseQuantity()
  }

  return (
    <QuantityButtonContainer>
      <button onClick={handleAddQuantity}>
        <Plus />
      </button>
      <input type="text" value={quantity} disabled />
      <button onClick={handleIncreaseQuantity}>
        <Minus />
      </button>
    </QuantityButtonContainer>
  )
}
