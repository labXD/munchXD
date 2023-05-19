// components/Toggle.tsx
import { useState } from 'react'
import clsx from 'clsx'

interface ToggleProps {
  visited: boolean
  onClick: () => void
}

export function Toggle({ visited, onClick }: ToggleProps) {
  const [isVisited, setIsVisited] = useState(visited)

  const handleToggle = () => {
    setIsVisited(!isVisited)
    onClick()
  }

  return (
    <button
      className={clsx(
        'transition-all relative h-8',
        'before:absolute before:-left-2 before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:content-["visited?_"] before:leading-0',
        {
          'text-gray-400 ': !isVisited,
          'text-green-700': isVisited,
        }
      )}
      onClick={handleToggle}
    >
      <span
        className={clsx('material-symbols-rounded text-[32px] leading-0', {
          fill: isVisited,
        })}
      >
        {isVisited ? 'toggle_on' : 'toggle_off'}
      </span>
    </button>
  )
}
