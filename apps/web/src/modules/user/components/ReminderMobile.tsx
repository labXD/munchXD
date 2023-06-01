import { useMemo, useState } from 'react'
import { DatePickerMobile } from './calendar'
import { DateValue } from 'react-aria'
import {
  ReminderOmits,
  createReminder,
  deleteReminder,
} from '~/modules/api/routes'
import { Reminder } from '@prisma/client'
import clsx from 'clsx'
import { getLocalTimeZone, today } from '@internationalized/date'

interface ReminderProps {
  id: number
  data: Reminder[]
  refetch: () => void
}
export function ReminderMobile(props: ReminderProps) {
  const [reminderData] = useState<Reminder[]>(props.data)
  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const [date, setDate] = useState<Date | null>(null)

  const sortedReminderData = useMemo(() => {
    return [...reminderData].sort((a, b) => {
      const dateA = new Date(a.remindAt)
      const dateB = new Date(b.remindAt)
      return dateA.getTime() - dateB.getTime()
    })
  }, [reminderData])

  const onDateChange = (value: DateValue) => {
    const { day, month, year } = value
    const dateVisited = new Date(year, month - 1, day) as Date
    setDate(dateVisited)
  }

  const handleSubmit = async () => {
    if (!date) return

    const reminderDetails: ReminderOmits = {
      remindAt: date,
      daysInFuture: 0,
      restaurantId: props.id,
    }
    try {
      await createReminder(reminderDetails)
      props.refetch()
      setAdd(!add)
    } catch (error) {
      console.error('Error creating reminder:', error)
    }
  }

  const handleReset = () => {
    setDate(null)
    setAdd(!add)
  }

  const handleDelete = async (reminderId: number) => {
    try {
      await deleteReminder(props.id, reminderId)
      props.refetch()
      setEdit(!edit)
    } catch (error) {
      console.error('Error deleting reminder:', error)
    }
  }

  const CreateReminder = () => (
    <div className={clsx('pl-0 pt-2')}>
      <button
        className={clsx(
          'flex items-center',
          'border border-dashed border-gray-500 bg-white/80 rounded',
          {
            'flex-col space-y-1 p-2': sortedReminderData.length > 0,
            'items-center space-x-1  px-4 py-2':
              sortedReminderData.length === 0,
          }
        )}
        onClick={() => setAdd(!add)}
      >
        <span className="material-symbols-rounded text-orange-700">add</span>
        <h3 className="text-sm text-gray-700 leading-0">Create</h3>
      </button>
    </div>
  )

  return (
    <div className="pt-4 flex flex-col">
      <div className="flex relative">
        <span
          className={clsx(
            'flex-1 px-2 py-1 rounded-t',
            'text-center text-sm bg-orange-500 text-white uppercase'
          )}
        >
          reminders
        </span>
        {props.data.length === 0}
        {add && !edit && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
            type="reset"
            onClick={() => handleReset()}
          >
            <span
              className={clsx('material-symbols-rounded drop-shadow text-xl')}
            >
              cancel
            </span>
          </button>
        )}

        {props.data.length > 0 && !add && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
            onClick={() => setEdit(!edit)}
          >
            <span
              className={clsx('material-symbols-rounded drop-shadow text-xl')}
            >
              {edit ? 'cancel' : 'edit'}
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center bg-orange-50 rounded-b pb-2">
        {add ? (
          <div className="px-2 flex flex-1 items-center space-x-8 pt-2">
            <DatePickerMobile
              onChange={(value) => onDateChange(value)}
              aria-details="date picker"
              aria-label="date picker"
              minValue={today(getLocalTimeZone())}
            />
            <div className="flex space-x-2 items-center">
              <button
                className="text-green-700 flex items-center"
                type="submit"
                onClick={() => handleSubmit()}
              >
                <span className="material-symbols-rounded">save</span>
              </button>
            </div>
          </div>
        ) : sortedReminderData && sortedReminderData.length > 0 ? (
          <>
            {!edit && <CreateReminder />}
            {sortedReminderData.map((rem) => {
              const dateVisited = new Date(rem.remindAt)
              const formattedDate = `${
                dateVisited.getMonth() + 1
              }/${dateVisited.getDate()}/${dateVisited
                .getFullYear()
                .toString()
                .slice(-2)}`

              return (
                <div key={rem.id} className={clsx('pl-4 pt-2 first:pl-0')}>
                  <div
                    className={clsx(
                      'flex flex-col items-center',
                      'border border-transparent rounded p-2'
                    )}
                  >
                    {edit ? (
                      <button onClick={() => handleDelete(rem.id)}>
                        <span className="text-red-700 material-symbols-rounded">
                          delete
                        </span>
                      </button>
                    ) : (
                      <button>
                        <span className="material-symbols-rounded text-orange-700">
                          event_available
                        </span>
                      </button>
                    )}
                    <h3 className="pt-1 text-sm text-gray-700">
                      {formattedDate}
                    </h3>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <CreateReminder />
        )}
      </div>
    </div>
  )
}
