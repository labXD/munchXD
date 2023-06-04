import { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import clsx from 'clsx'

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
  wrapperClassName?: string
}
export function SearchInput(props: SearchInputProps) {
  const [value, setValue] = useState(props.value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.onChange(value)
    }, props.debounce)

    return () => clearTimeout(timeout)
  }, [value])

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '' // Clear the input value
    }
    setValue('')
  }

  return (
    <div
      className={clsx(
        props.wrapperClassName,
        'relative',
        'h-12 flex',
        'bg-white',
        'focus-within:ring focus-within:ring-inset focus-within:ring-blue-600'
      )}
    >
      <input
        ref={inputRef}
        autoFocus
        {...props}
        className={clsx(
          props.className,
          'w-full pl-4 pr-8 outline-none shadow',
          'bg-transparent'
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => clearInput()}
        className={clsx(
          'flex items-center absolute right-2 top-1/2 -translate-y-1/2 z-20',
          {
            hidden: value === '',
          }
        )}
      >
        <Icon icon="close" />
      </button>
    </div>
  )
}
