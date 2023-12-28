import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { RadioContainer } from './style'

type IRadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const RadioInput = forwardRef(function RadioInput(
  { isSelected, children, ...rest }: IRadioInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </RadioContainer>
  )
})
