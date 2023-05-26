import { useRef } from 'react'
import { DatePickerStateOptions, useDatePickerState } from 'react-stately'
import { AriaDatePickerProps, DateValue, useDatePicker } from 'react-aria'
import { FieldButton } from './Button'
import { Calendar } from './Calendar'
import { DateField } from './DateField'
import { Popover } from './Popover'
import { Dialog } from './Dialog'

export function DatePicker(props: AriaDatePickerProps<DateValue>) {
  const state = useDatePickerState(props)
  const ref = useRef<HTMLDivElement>(null)
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref)

  return (
    <div className="relative inline-flex flex-col text-left w-full">
      <div {...groupProps} ref={ref} className="flex group flex-1">
        <div className="bg-white transition-colors flex-1 p-1 relative flex items-center">
          <DateField {...fieldProps} />
          {state.validationState === 'invalid' && (
            <span className="material-symbols-rounded text-red-500 absolute right-1">
              priority_high
            </span>
          )}
        </div>
        <FieldButton {...buttonProps}>
          <span className="material-symbols-rounded text-gray-700 hover:text-violet-700 group-focus-within:text-violet-700">
            calendar_month
          </span>
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} placement="bottom start">
          <Dialog title="dialog" {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  )
}
