import * as React from 'react'
import {
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
} from '@tanstack/react-table'
import { Reminder, Restaurant, Visit } from '@prisma/client'

import {
  RankingInfo,
  rankItem,
  compareItems,
} from '@tanstack/match-sorter-utils'
import clsx from 'clsx'
import Link from 'next/link'
import { createPlace, deletePlace, RestaurantOmits } from '@/api/routes'

import { VisitMobile } from './VisitMobile'
import { ReminderMobile } from './ReminderMobile'
import { Icon } from './Icon'
import { BottomNav } from './BottomNav'
import {
  AutocompleteComponent,
  GoogleMapsContainer,
  PlaceResultProps,
} from '@/map'
import { Badge } from './Badge'
import { SearchInput } from './SearchInput'
import { AlertDialog, Modal, ModalButton } from './modal'
import { useOverlayTriggerState } from 'react-stately'
import { Button } from 'ui-local'

interface DataProps extends Restaurant {
  visits: Visit[]
  reminders: Reminder[]
}
export function MobileList() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [addComp, setAddComp] = React.useState<boolean>(false)
  const [place, setPlace] = React.useState<PlaceResultProps>()
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [data, setData] = React.useState([])
  const state = useOverlayTriggerState({})

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

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
      itemRank,
    })

    return itemRank.passed
  }

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
  const handleCreate = async () => {
    if (place !== undefined) {
      const mapDetails: RestaurantOmits = {
        place_id: place.place_id ?? '',
        name: place.name ?? '',
        address: place.formatted_address ?? '',
        google_map_url: place.url ?? null,
        lat: place.geometry?.location?.lat() ?? null,
        lng: place.geometry?.location?.lng() ?? null,
      }
      try {
        await createPlace(mapDetails)
        state.close()
        fetchData()
      } catch (error) {
        console.error('Error deleting place:', error)
      }
    }
  }

  const closeModal = () => {
    setPlace(undefined)
    state.close()
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

    columnHelper.accessor('name', {
      cell: (info) => null,
    }),
    columnHelper.accessor('address', {
      cell: (info) => <div className="pt-2">{info.getValue()}</div>,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.visits, {
      id: 'visits',
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
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  function handlePlace(res: PlaceResultProps) {
    if (res !== undefined) {
      setPlace(res)
    } else setPlace(undefined)
  }

  return (
    <main className={clsx('pb-20 ')}>
      <Modal state={state}>
        <AlertDialog title="Add Restaurant" confirmLabel="Add">
          <div className="px-4">
            <GoogleMapsContainer>
              <AutocompleteComponent
                className="rounded-none"
                getPlace={(place) => handlePlace(place)}
              />
            </GoogleMapsContainer>
          </div>
          <div className="px-4 py-4 flex space-x-3 justify-end">
            <ModalButton
              className="btn btn-sm btn-outline"
              onPress={() => closeModal()}
            >
              Cancel
            </ModalButton>
            <ModalButton className="btn btn-sm" onPress={() => handleCreate()}>
              Add
            </ModalButton>
          </div>
        </AlertDialog>
      </Modal>

      <div className={clsx('fixed top-0 inset-0 z-10 h-12')}>
        <SearchInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="Search..."
        />
      </div>

      <section className={clsx('px-2 pt-16', 'space-y-4')}>
        {table.getRowModel().rows.map((row) => {
          return (
            <div key={row.id} className={clsx('card')}>
              {row.getVisibleCells().map((cell) => {
                return flexRender(cell.column.columnDef.cell, cell.getContext())
              })}
            </div>
          )
        })}
      </section>
      <BottomNav>
        <ModalButton
          className="btn btn-sm btn-ghost flex-col"
          onPress={state.open}
        >
          <Icon icon={addComp ? 'close' : 'add'} />
          <span>New</span>
        </ModalButton>

        <Link
          href="/list"
          className="relative btn btn-sm btn-ghost flex-col space-y-1"
        >
          <Icon icon="table_view" />
          <span>Table</span>
          <aside className="absolute -top-1 -translate-y-full z-20 right-1/2 translate-x-1/2">
            <Badge>{table.getRowModel().rows.length}</Badge>
          </aside>
        </Link>
      </BottomNav>
    </main>
  )
}
