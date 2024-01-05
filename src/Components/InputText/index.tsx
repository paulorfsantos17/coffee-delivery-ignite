import {
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
  FocusEvent,
} from 'react'
import { ErrorMessage, InputContainer } from './style'
import { FieldError } from 'react-hook-form'

type ITextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  gridArea?: string
  error?: FieldError
}

export const InputText = forwardRef(function TextInput(
  {
    optional = false,
    error,
    onFocus,
    onBlur,
    gridArea,
    ...rest
  }: ITextInputProps,
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
  const isError = !!error
  return (
    <InputContainer gridArea={gridArea} error={isError}>
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
      {isError ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </InputContainer>
  )
})
