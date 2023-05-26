import { useRef } from 'react'
import { useCalendarState } from 'react-stately'
import { useCalendar, useLocale } from 'react-aria'
import { createCalendar } from '@internationalized/date'
import { CalendarButton } from './Button'
import { CalendarGrid } from './CalendarGrid'

export function Calendar(props) {
  let { locale } = useLocale()
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  let ref = useRef()
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
    ref
  )

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <div className="flex items-center pb-4">
        <h2 className="flex-1 font-bold text-xl ml-2">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <span className="material-symbols-rounded">chevron_left</span>
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <span className="material-symbols-rounded">chevron_right</span>
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}
