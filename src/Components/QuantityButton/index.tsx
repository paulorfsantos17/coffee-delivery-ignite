import { Minus, Plus } from 'phosphor-react'
import { QuantityButtonContainer } from './style'
import { MouseEvent } from 'react'
interface IQuatityButtonProps {
  increaseQuantity: () => void
  decreaseQuantity: () => void
  quantity: number
}
export function QuatityButton({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}: IQuatityButtonProps) {
  const handleAddQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    increaseQuantity()
  }
  const handleIncreaseQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    decreaseQuantity()
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
