import clsx from 'clsx'

interface IconProps {
  className?: string
  icon: string
}
export function Icon(props: IconProps) {
  return (
    <span className={clsx(props.className, 'material-symbols-rounded')}>
      {props.icon}
    </span>
  )
}
