import type { AriaDialogProps } from 'react-aria'
import React from 'react'
import { useDialog } from 'react-aria'
import { Button } from './Button'

interface AlertDialogProps extends AriaDialogProps {
  children: React.ReactNode
  title?: string
  variant?: 'default' | 'destructive'
  confirmLabel?: string
  onClose?: () => void
}

export function AlertDialog(props: AlertDialogProps) {
  let { children, onClose, confirmLabel } = props

  let ref = React.useRef(null)
  let { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: 'alertdialog',
    },
    ref
  )

  return (
    <div {...dialogProps} ref={ref} className="outline-none">
      <h3
        {...titleProps}
        className="pt-4 px-4 text-lg font-medium pb-2 dark:text-gray-700"
      >
        {props.title}
      </h3>
      {children}
      {/* <div className="pt-8 flex space-x-3 justify-end">
        <Button onPress={onClose}>Cancel</Button>
        <Button onPress={onClose}>{confirmLabel}</Button>
      </div> */}
    </div>
  )
}
