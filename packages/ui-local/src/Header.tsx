import clsx from 'clsx'
import { Input } from './Input'

export function Header() {
  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0',
        'flex flex-col',
        'shadow bg-black text-white'
      )}
    >
      <div className="w-full flex justify-center p-2">location</div>
      <div className="w-full flex flex-col p-2 space-y-3">
        <Input icon="search" placeholder="eg. tacos" />
        <Input icon="pin_drop" placeholder="New York, NY USA" />
      </div>
    </header>
  )
}
