import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface BottomNavProps {
  className?: string
  children: ReactNode
  center?: boolean
}
export function BottomNav(props: BottomNavProps) {
  return (
    <div
      className={clsx(
        props.className,
        'fixed bottom-0 inset-x-0 z-10 h-16',
        'px-4',
        'bg-white border-t border-gray-200',
        'flex items-center justify-between',
        {
          'justify-around': props.center,
        }
      )}
    >
      {props.children}
    </div>
  )
}
