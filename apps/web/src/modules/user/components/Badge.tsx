import clsx from 'clsx'
import { ReactNode } from 'react'

export interface BadgeProps {
  className?: string
  children: ReactNode
}
export function Badge(props: BadgeProps) {
  return (
    <span
      className={clsx(
        props.className,
        'px-2 py-1 rounded-full',
        'bg-gray-600/70',
        'text-sm leading-none text-white'
      )}
    >
      {props.children}
    </span>
  )
}
