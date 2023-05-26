import { ElementRef, RefObject, useRef } from 'react'
import {
  DateFieldState,
  DateFieldStateOptions,
  DateSegment,
  useDateFieldState,
} from 'react-stately'
import {
  AriaDatePickerProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from 'react-aria'
import { createCalendar } from '@internationalized/date'
import clsx from 'clsx'

export function DateField(props: AriaDatePickerProps<DateValue>) {
  let { locale } = useLocale()
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef<HTMLDivElement>(null)
  let { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}

interface DateSegmentProps {
  segment: DateSegment
  state: DateFieldState
}
function DateSegment({ segment, state }: DateSegmentProps) {
  let ref = useRef<HTMLDivElement>(null)
  let { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? String(segment.maxValue).length + 'ch'
            : '',
      }}
      className={`px-0.5 box-content tabular-nums text-right outline-none rounded-sm focus:bg-violet-600 focus:text-white group ${
        !segment.isEditable ? 'text-gray-500' : 'text-gray-800'
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className={clsx(
          'block w-full text-center italic text-gray-500 group-focus:text-white',
          {
            hidden: segment.text,
          }
        )}
      >
        {segment.placeholder}
      </span>
      {segment.text}
    </div>
  )
}
