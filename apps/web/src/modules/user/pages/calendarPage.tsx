import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, ViewsProps, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { PageLayout } from '~/modules/meta'
import { useEffect, useMemo, useState } from 'react'
import { Restaurant } from '@prisma/client'
import Link from 'next/link'
import { Icon } from '../components'

type Visit = {
  id: number
  dateVisited: Date
  createdAt: Date
  updatedAt: Date
  restaurantId: number
}

interface DataProps extends Visit {
  restaurant: Restaurant
}
export function CalendarPage() {
  const [data, setData] = useState([])
  const localizer = momentLocalizer(moment)

  const fetchData = async () => {
    try {
      const response = await fetch('/api/restaurants/visits', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const events = data.map((item: DataProps) => {
    return {
      id: item.id,
      title: item.restaurant.name,
      start: new Date(item.dateVisited),
      end: new Date(item.dateVisited),
    }
  })
  const { views } = useMemo(
    () => ({
      views: {
        month: true,
        day: true,
      } as ViewsProps,
    }),
    []
  )

  return (
    <PageLayout title="Calendar Page">
      <div className="h-16 shadow flex items-center">
        <div className="flex-1 flex justify-around">
          <Link
            href="/"
            className="relative btn btn-sm btn-ghost flex-col space-y-1"
          >
            <Icon icon="fact_check" />
            <span>List View</span>
          </Link>
          <Link
            href="/list"
            className="relative btn btn-sm btn-ghost flex-col space-y-1"
          >
            <Icon icon="table_view" />
            <span>Table</span>
          </Link>
        </div>
      </div>
      <main className="h-[calc(100vh_-_64px)] p-4 relative">
        <Calendar events={events} localizer={localizer} views={views} />
      </main>
    </PageLayout>
  )
}
