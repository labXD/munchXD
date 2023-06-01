import { useMemo, useState } from 'react'
import { DatePicker } from './calendar'
import { DateValue } from 'react-aria'
import { VisitOmits, createVisit, deleteVisit } from '~/modules/api/routes'
import { Visit } from '@prisma/client'

interface VisitProps {
  id: number
  data: Visit[]
  refetch: () => void
}
export function VisitComponent(props: VisitProps) {
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
            {sortedVisitData && sortedVisitData.length > 0 ? (
              sortedVisitData.map((visit) => {
                const date = new Date(visit.dateVisited) as Date
                return (
                  <div key={visit.id} className="flex items-center space-x-1">
                    {edit && (
                      <button onClick={() => handleDelete(visit.id)}>
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
