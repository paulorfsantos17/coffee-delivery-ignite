import {
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
  FocusEvent,
} from 'react'
import { InputContainer } from './style'

type ITextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  gridArea?: string
}

export const InputText = forwardRef(function TextInput(
  { optional = false, onFocus, onBlur, gridArea, ...rest }: ITextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true)
    onFocus?.(event)
  }
  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false)
    onBlur?.(event)
  }
  return (
    <InputContainer gridArea={gridArea}>
      <label data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
        {optional ? <span>Optional</span> : ''}
      </label>
    </InputContainer>
  )
})
