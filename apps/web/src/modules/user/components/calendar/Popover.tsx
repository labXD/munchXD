import * as React from 'react'
import {
  usePopover,
  DismissButton,
  Overlay,
  AriaPopoverProps,
} from 'react-aria'
import { OverlayTriggerState } from 'react-stately'
interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
  className?: string
  popoverRef?: React.RefObject<HTMLDivElement>
}

export function Popover(props: PopoverProps) {
  let ref = React.useRef(null)
  let { state, children } = props

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  )

  return (
    <Overlay portalContainer={document.body}>
      <div {...underlayProps} className="fixed inset-0" />
      <div
        {...popoverProps}
        ref={ref}
        className="absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-8 z-10"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
