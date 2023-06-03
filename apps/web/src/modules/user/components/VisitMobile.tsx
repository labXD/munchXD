import { useMemo, useState } from 'react'
import { DatePickerMobile } from './calendar'
import { DateValue } from 'react-aria'
import { VisitOmits, createVisit, deleteVisit } from '~/modules/api/routes'
import { Visit } from '@prisma/client'
import clsx from 'clsx'
import { getLocalTimeZone, today } from '@internationalized/date'

interface VisitProps {
  id: number
  data: Visit[]
  refetch: () => void
}
export function VisitMobile(props: VisitProps) {
  const [visitData] = useState<Visit[]>(props.data)
  const [add, setAdd] = useState(false)
  const [edit, setEdit] = useState(false)
  const [date, setDate] = useState<Date | null>(null)
  const sortedVisitData = useMemo(() => {
    return [...visitData].sort((a, b) => {
      const dateA = new Date(a.dateVisited)
      const dateB = new Date(b.dateVisited)
      return dateB.getTime() - dateA.getTime()
    })
  }, [visitData])

  const onDateChange = (value: DateValue) => {
    const { day, month, year } = value
    const dateVisited = new Date(year, month - 1, day) as Date
    setDate(dateVisited)
  }

  const handleSubmit = async () => {
    if (!date) return

    const visitDetails: VisitOmits = {
      dateVisited: date,
      restaurantId: props.id,
    }
    try {
      await createVisit(visitDetails)
      props.refetch()
      setAdd(!add)
    } catch (error) {
      console.error('Error creating visit:', error)
    }
  }

  const handleReset = () => {
    setDate(null)
    setAdd(!add)
  }

  const handleDelete = async (visitId: number) => {
    try {
      await deleteVisit(props.id, visitId)
      props.refetch()
      setEdit(!edit)
    } catch (error) {
      console.error('Error deleting visit:', error)
    }
  }

  const CreateVisit = () => (
    <div className={clsx('pl-0 pt-2')}>
      <button
        className={clsx(
          'flex items-center',
          'border border-dashed border-gray-500 bg-white/80 rounded',
          {
            'flex-col space-y-1 p-2': sortedVisitData.length > 0,
            'items-center space-x-1  px-4 py-2': sortedVisitData.length === 0,
          }
        )}
        onClick={() => setAdd(!add)}
      >
        <span className="material-symbols-rounded text-violet-700">add</span>
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
            'text-center text-sm bg-violet-500 text-white uppercase'
          )}
        >
          visits
        </span>
        {props.data.length === 0}
        {props.data.length === 0 ? null : add ? (
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
        ) : (
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
      <div className="flex flex-wrap justify-center bg-violet-50 rounded-b pb-2">
        {add ? (
          <div className="px-2 flex flex-1 items-center space-x-8 pt-2">
            <DatePickerMobile
              onChange={(value) => onDateChange(value)}
              aria-details="date picker"
              aria-label="date picker"
              maxValue={today(getLocalTimeZone())}
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
        ) : sortedVisitData && sortedVisitData.length > 0 ? (
          <>
            {!edit && <CreateVisit />}
            {sortedVisitData.map((visit) => {
              const dateVisited = new Date(visit.dateVisited)
              const formattedDate = `${
                dateVisited.getMonth() + 1
              }/${dateVisited.getDate()}/${dateVisited
                .getFullYear()
                .toString()
                .slice(-2)}`

              return (
                <div key={visit.id} className={clsx('pl-4 pt-2 first:pl-0')}>
                  <div
                    className={clsx(
                      'flex flex-col items-center',
                      'border border-transparent rounded p-2'
                    )}
                  >
                    {edit ? (
                      <button onClick={() => handleDelete(visit.id)}>
                        <span className="text-red-700 material-symbols-rounded">
                          delete
                        </span>
                      </button>
                    ) : (
                      <button>
                        <span className="material-symbols-rounded">
                          event_available
                        </span>
                      </button>
                    )}
                    <h3 className="pt-1 text-sm">{formattedDate}</h3>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <CreateVisit />
        )}
      </div>
    </div>
  )
}
