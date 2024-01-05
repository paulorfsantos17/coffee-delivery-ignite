import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { RadioContainer } from './style'

type IRadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
  error?: boolean
}

export const RadioInput = forwardRef(function RadioInput(
  { isSelected, children, error, ...rest }: IRadioInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer data-state={isSelected} error={error}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </RadioContainer>
  )
})
