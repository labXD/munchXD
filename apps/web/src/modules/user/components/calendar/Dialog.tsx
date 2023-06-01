import { AriaDialogProps, useDialog } from 'react-aria'
import React from 'react'

interface DialogProps extends AriaDialogProps {
  title: string
  children: React.ReactNode
}
export function Dialog({ title, children, ...props }: DialogProps) {
  let ref = React.useRef<HTMLDivElement>(null)
  let { dialogProps } = useDialog(props, ref)

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  )
}
