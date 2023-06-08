import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, ViewsProps, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { PageLayout } from '@/meta'
import { useMemo } from 'react'
import Link from 'next/link'
import { Icon } from '../components'
import { trpc } from '@/server/trpc'

export function CalendarPage() {
  const localizer = momentLocalizer(moment)

  const getVisits = trpc.visit.findManyVisit.useQuery({
    include: {
      restaurant: true,
    },
  })
  const events = getVisits.data?.map((item) => {
    return {
      id: item.id,
      // @ts-ignore
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
