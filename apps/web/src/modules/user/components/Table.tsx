import * as React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Reminder, Restaurant, Visit } from '@prisma/client'

import { Column, getFilteredRowModel, Table } from '@tanstack/react-table'

import clsx from 'clsx'
import { calcTimeElapsed } from '../utils'
import Link from 'next/link'
import { deletePlace } from '~/modules/api/routes'
import { VisitComponent } from './Visit'
import { ReminderComponent } from './Reminder'

interface DataProps extends Restaurant {
  visits: Visit[]
  reminders: Reminder[]
}
export function Table() {
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
    columnHelper.accessor('name', {
      cell: (info) => <span>{info.getValue()}</span>,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor('address', {
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: 'createdAt',
      cell: (info) => {
        const date = new Date(info.getValue()) as Date
        const formattedDate = calcTimeElapsed(date)
        return (
          <span>
            {date.toLocaleDateString()} ({formattedDate})
          </span>
        )
      },
      header: () => <span>Added</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.visits, {
      id: 'visits',
      cell: (info) => {
        const data = info.getValue() as Visit[]
        const { id } = info.row.original
        return (
          <VisitComponent id={id} data={data} refetch={() => fetchData()} />
        )
      },
      header: () => <span>Visited</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.reminders, {
      id: 'reminders',
      cell: (info) => {
        const data = info.getValue() as Reminder[]
        const { id } = info.row.original
        return (
          <ReminderComponent id={id} data={data} refetch={() => fetchData()} />
        )
      },
      header: () => <span>Reminders</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: 'delete',
      cell: ({ row }) => {
        const { id } = row.original
        return (
          <span>
            <button onClick={() => handleDelete(id)}>
              <span className="material-symbols-rounded text-red-700">
                delete
              </span>
            </button>
          </span>
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
  })

  return (
    <div className="p-2 flex flex-col max-w-full overflow-x-scroll">
      <div className="flex items-center space-x-4 px-2 py-1 text-sm">
        <Link
          href="/map"
          className="border border-purple-700 rounded bg-purple-700 text-white p-2"
        >
          Add Restaurant
        </Link>
        <button
          className="border-2 rounded border-purple-700 text-purple-700 p-2"
          onClick={() => fetchData()}
        >
          Refresh
        </button>
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className={clsx(
                      'h-8',
                      'border text-sm bg-gray-100 font-normal',
                      'sticky top-0'
                    )}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    <span className={clsx('px-2 py-1')}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                  </th>
                )
              })}
            </tr>
          ))}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className={clsx(
                      'h-8',
                      'border text-sm bg-gray-50 font-normal'
                    )}
                    colSpan={header.colSpan}
                  >
                    {header.column.getCanFilter() ? (
                      <div className="h-full">
                        <Filter column={header.column} table={table} />
                      </div>
                    ) : null}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className="border-x text-sm">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className="h-8" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="border-t">
                      <span className="p-2 flex items-start">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </span>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot className="sticky bottom-0 bg-gray-200">
          <tr>
            <td colSpan={20}>
              <span className="px-2 py-1">
                Count: ({table.getRowModel().rows.length})
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

function Filter({ column }: { column: Column<any, any>; table: Table<any> }) {
  return (
    <input
      type="text"
      value={(column.getFilterValue() ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Search..."
      className="w-full h-full px-2 bg-white"
    />
  )
}
