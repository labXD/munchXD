import { useEffect, useMemo, useState } from 'react'
import { DatePicker } from './calendar'
import { DateValue } from 'react-aria'
import { VisitOmits, createVisit } from '~/modules/api/routes'
import { Visit } from '@prisma/client'
import { CalendarDate } from '@internationalized/date'

interface VisitProps {
  id: number
}
export function Visit(props: VisitProps) {
  const [data, setData] = useState<Visit[]>()
  const [loading, setLoading] = useState(true) // Added loading state

  useEffect(() => {
    fetch(`/api/restaurants/${props.id}/visits`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [props.id])

  const onDateChange = (restaurantId: number, value: DateValue) => {
    const { day, month, year } = value
    const dateVisited = new Date(year, month - 1, day) as Date
    const visitDetails: VisitOmits = {
      restaurantId,
      dateVisited,
    }
    createVisit(visitDetails)
  }

  const dateValue = useMemo(() => {
    if (data && data.length > 0) {
      const lastItem = new Date(data[data.length - 1].dateVisited)
      const year = lastItem.getFullYear()
      const month = lastItem.getMonth() + 1
      const day = lastItem.getDate()
      const dateValue = new CalendarDate(year, month, day)
      return dateValue
    }
  }, [data])

  if (loading) {
    return <div className="h-8 w-52 rounded animate-pulse bg-gray-300" />
  }
  return (
    <DatePicker
      onChange={(value) => onDateChange(props.id, value)}
      aria-details="date picker"
      aria-label="date picker"
      defaultValue={dateValue}
    />
  )
}
