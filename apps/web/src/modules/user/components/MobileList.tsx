import * as React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { Reminder, Restaurant, Visit } from '@prisma/client'

import { getFilteredRowModel } from '@tanstack/react-table'

import clsx from 'clsx'
import Link from 'next/link'
import { deletePlace } from '~/modules/api/routes'

import { VisitMobile } from './VisitMobile'
import { ReminderMobile } from './ReminderMobile'

interface DataProps extends Restaurant {
  visits: Visit[]
  reminders: Reminder[]
}
export function MobileList() {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: 'name', desc: false },
  ])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/restaurants', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetchData()
  }, [])
  const handleDelete = async (id: number) => {
    try {
      await deletePlace(id)
      fetchData()
    } catch (error) {
      console.error('Error deleting place:', error)
    }
  }
  const columnHelper = createColumnHelper<DataProps>()

  const columns = [
    columnHelper.display({
      id: 'visit-badge',
      cell: ({ row }) => {
        const hasVisit = row.original.visits.length > 0
        const { google_map_url, name } = row.original
        return (
          <div className="flex items-start">
            <div className="mr-1">
              <div
                className={clsx('transition-all', {
                  'text-gray-400 ': !hasVisit,
                  'text-green-700': hasVisit,
                })}
              >
                <span
                  className={clsx('material-symbols-rounded ', {
                    fill: hasVisit,
                  })}
                >
                  {hasVisit ? 'beenhere' : 'notifications'}
                </span>
              </div>
            </div>
            <Link
              className="flex-1 text-blue-800 lg:max-w-xs"
              href={google_map_url ?? ''}
              target="_blank"
            >
              <h2 className="text-base font-medium pr-8">{name}</h2>
            </Link>
          </div>
        )
      },
    }),

    columnHelper.accessor('address', {
      cell: (info) => <div className="pt-2">{info.getValue()}</div>,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.visits, {
      id: 'visits',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        const data = info.getValue() as Visit[]
        const { id } = info.row.original
        return <VisitMobile id={id} data={data} refetch={() => fetchData()} />
      },
      header: () => <span>Visited</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.reminders, {
      id: 'reminders',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        const data = info.getValue() as Reminder[]
        const { id } = info.row.original
        return (
          <ReminderMobile id={id} data={data} refetch={() => fetchData()} />
        )
      },
      header: () => <span>Visited</span>,
      footer: (info) => info.column.id,
    }),

    columnHelper.display({
      id: 'delete',
      cell: ({ row }) => {
        const { id } = row.original
        return (
          <div className={clsx('absolute top-4 right-4')}>
            <button onClick={() => handleDelete(id)}>
              <span className="material-symbols-rounded text-red-700">
                delete
              </span>
            </button>
          </div>
        )
      },
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,

    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="p-2 flex flex-col max-w-full overflow-x-scroll">
      <main className="py-4 px-4 space-y-4 lg:mx-auto">
        <div className="flex justify-between items-end">
          <div className="space-x-4 flex text-sm">
            <Link
              href="/map"
              className="border border-purple-700 rounded bg-purple-700 text-white p-2"
            >
              Add Restaurant
            </Link>
            <Link
              href="/list"
              className="border rounded border-purple-700 text-purple-700 p-2"
            >
              List View
            </Link>
          </div>
          <aside>({table.getRowModel().rows.length})</aside>
        </div>
        {table.getRowModel().rows.map((row) => {
          return (
            <div
              key={row.id}
              className={clsx(
                'relative',
                'p-4 rounded shadow',
                'bg-white',
                'text-sm'
              )}
            >
              {row.getVisibleCells().map((cell) => {
                return flexRender(cell.column.columnDef.cell, cell.getContext())
              })}
            </div>
          )
        })}
      </main>
    </div>
  )
}
