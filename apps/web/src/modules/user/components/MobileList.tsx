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
} from '@tanstack/react-table'
import { Reminder, Restaurant, Visit } from '@prisma/client'

import { rankItem } from '@tanstack/match-sorter-utils'
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
import { trpc } from '@/server/trpc'
import { TRPCClientError } from '@trpc/client'

interface DataProps extends Restaurant {
  visits: Visit[]
  reminders: Reminder[]
}
export function MobileList() {
  const { data, refetch, isLoading, error } =
    trpc.restaurant.findManyRestaurant.useQuery({
      include: {
        visits: true,
        reminders: true,
      },
    })

  const deleteRestaurantMutation =
    trpc.restaurant.deleteOneRestaurant.useMutation()

  const createRestaurantMutation =
    trpc.restaurant.createOneRestaurant.useMutation()

  const [sorting, setSorting] = React.useState<SortingState>([
    { id: 'name', desc: false },
  ])

  const [place, setPlace] = React.useState<PlaceResultProps>()
  const [globalFilter, setGlobalFilter] = React.useState('')
  const state = useOverlayTriggerState({})

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
      itemRank,
    })

    return itemRank.passed
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteRestaurantMutation.mutateAsync({
        where: {
          id,
        },
        include: {
          visits: true,
          reminders: true,
        },
      })

      // If the deletion is successful, you can perform any necessary actions
      // such as showing a success message or navigating to a different page.
      refetch()
    } catch (error) {
      // Handle the error here
      if (error instanceof TRPCClientError) {
        console.log('error\n', error)
        console.error(
          'Cannot delete the restaurant. There are associated visits.'
        )
      } else {
        // Handle other types of errors
        console.error('An error occurred while deleting the restaurant.', error)
      }
    }
  }
  const handleCreate = () => {
    if (place !== undefined) {
      const mapDetails: RestaurantOmits = {
        place_id: place.place_id ?? '',
        name: place.name ?? '',
        address: place.formatted_address ?? '',
        google_map_url: place.url ?? null,
        lat: place.geometry?.location?.lat() ?? null,
        lng: place.geometry?.location?.lng() ?? null,
      }
      createRestaurantMutation.mutate(
        {
          data: mapDetails,
        },
        {
          onSuccess: () => {
            refetch()
          },
        }
      )
    }
  }

  const closeModal = () => {
    setPlace(undefined)
    state.close()
  }

  const columnHelper = createColumnHelper<DataProps>()

  const columns = [
    columnHelper.accessor('name', {
      cell: (info) => null,
      enableSorting: true,
    }),

    columnHelper.display({
      id: 'visit-badge',
      enableSorting: false,
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
      enableSorting: false,
      cell: (info) => <div className="pt-2">{info.getValue()}</div>,
      footer: (props) => props.column.id,
    }),

    columnHelper.accessor((row) => row.visits, {
      id: 'visits',
      enableSorting: false,
      cell: (info) => {
        const data = info.getValue() as Visit[]
        const { id } = info.row.original
        return <VisitMobile id={id} data={data} refetch={() => refetch()} />
      },
      header: () => <span>Visited</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.reminders, {
      id: 'reminders',
      enableSorting: false,
      cell: (info) => {
        const data = info.getValue() as Reminder[]
        const { id } = info.row.original
        return <ReminderMobile id={id} data={data} refetch={() => refetch()} />
      },
      header: () => <span>Visited</span>,
      footer: (info) => info.column.id,
    }),

    columnHelper.display({
      id: 'delete',
      enableSorting: false,
      cell: ({ row }) => {
        const { id } = row.original
        return (
          <div className={clsx('absolute top-4 right-4')}>
            <button onClick={async () => handleDelete(id)}>
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
    // @ts-ignore
    data: data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
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

  const headerGroups = table.getHeaderGroups()
  const firstHeaderGroup = headerGroups[0].headers[0]

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <>
      <main className={clsx('pb-20 ')}>
        <div className={clsx('fixed top-0 inset-0 z-10 h-12')}>
          <SearchInput
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Search..."
          />
        </div>
        <section className="px-2 pt-16 card card-transparent">
          <button
            className="relative"
            onClick={firstHeaderGroup.column.getToggleSortingHandler()}
          >
            <Badge className="transition-all hover:bg-gray-600/100">
              <span>sort</span>
              {{
                asc: (
                  <span
                    className={clsx(
                      'absolute -right-1 top-1/2 -translate-y-1/2 translate-x-full',
                      'material-symbols-rounded text-sm leading-0 text-gray-500'
                    )}
                  >
                    sort
                  </span>
                ),
                desc: (
                  <span
                    className={clsx(
                      'absolute -right-1 top-1/2 -translate-y-1/2 translate-x-full',
                      'material-symbols-rounded text-sm leading-0 text-gray-500',
                      '-scale-y-100'
                    )}
                  >
                    sort
                  </span>
                ),
              }[firstHeaderGroup.column.getIsSorted() as string] ?? null}
            </Badge>
          </button>
        </section>
        <section className={clsx('px-2', 'space-y-4')}>
          {table.getRowModel().rows.map((row) => {
            return (
              <div key={row.id} className={clsx('card')}>
                {row.getVisibleCells().map((cell) => {
                  return flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )
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
            <Icon icon={state.isOpen ? 'close' : 'add'} />
            <span>New</span>
          </ModalButton>

          <Link
            href="/map"
            className="relative btn btn-sm btn-ghost flex-col space-y-1"
          >
            <Icon icon="location_on" />
            <span>Map</span>
          </Link>
          <Link
            href="/calendar"
            className="relative btn btn-sm btn-ghost flex-col space-y-1"
          >
            <Icon icon="event" />
            <span>Calendar</span>
          </Link>
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
    </>
  )
}
