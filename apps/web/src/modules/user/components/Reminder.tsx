import { useMemo, useState } from 'react'
import { DatePicker } from './calendar'
import { DateValue } from 'react-aria'
import {
  ReminderOmits,
  createReminder,
  deleteReminder,
} from '~/modules/api/routes'
import { Reminder } from '@prisma/client'

interface ReminderProps {
  id: number
  data: Reminder[]
  refetch: () => void
}
export function ReminderComponent(props: ReminderProps) {
  const [reminderData] = useState<Reminder[]>(props.data)
  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const [date, setDate] = useState<Date | null>(null)

  const sortedReminderData = useMemo(() => {
    return [...reminderData].sort((a, b) => {
      const dateA = new Date(a.remindAt)
      const dateB = new Date(b.remindAt)
      return dateB.getTime() - dateA.getTime()
    })
  }, [reminderData])

  const onDateChange = (value: DateValue) => {
    const { day, month, year } = value
    const dateReminder = new Date(year, month - 1, day) as Date
    setDate(dateReminder)
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

  return (
    <div className="flex-1">
      {add ? (
        <>
          <DatePicker
            onChange={(value) => onDateChange(value)}
            aria-details="date picker"
            aria-label="date picker"
          />
          <div className="flex space-x-2">
            <button
              className="text-purple-700"
              type="submit"
              onClick={() => handleSubmit()}
            >
              <span className="material-symbols-rounded">save</span>
            </button>
            <button
              className="text-purple-700"
              type="reset"
              onClick={() => handleReset()}
            >
              <span className="material-symbols-rounded">cancel</span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-start justify-between">
          <div className="flex flex-col space-y-1">
            {sortedReminderData && sortedReminderData.length > 0 ? (
              sortedReminderData.map((rem) => {
                const date = new Date(rem.remindAt) as Date
                return (
                  <div key={rem.id} className="flex items-center space-x-1">
                    {edit && (
                      <button onClick={() => handleDelete(rem.id)}>
                        <span className="text-base text-red-700 material-symbols-rounded">
                          delete
                        </span>
                      </button>
                    )}
                    <span>{date.toLocaleDateString()}</span>
                  </div>
                )
              })
            ) : (
              <span>(-)</span>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <button
              className="w-6 h-6 rounded-full bg-purple-700 text-white"
              onClick={() => setAdd(!add)}
            >
              <span className="material-symbols-rounded">add</span>
            </button>
            {props.data.length > 0 && (
              <button
                className=" text-yellow-700"
                onClick={() => setEdit(!edit)}
              >
                <span className="material-symbols-rounded">
                  {edit ? 'cancel' : 'edit'}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
