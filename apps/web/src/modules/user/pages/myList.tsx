import { PageLayout } from '@/meta'
import { useEffect, useState } from 'react'
import { ReadDbProps, readDb } from '@/api/routes'
import clsx from 'clsx'
import { calcTimeElapsed } from '../utils'
import Link from 'next/link'
import { AutocompleteComponent, PlaceResultProps } from '@/map'
import { GoogleMapsContainer } from '~/modules/map'
import { Toggle } from '../components'

export function MyList() {
  const [myResponse, setMyResponse] = useState<ReadDbProps>({
    data: [],
  })
  const [place, setPlace] = useState<PlaceResultProps>()

  useEffect(() => {
    readDb((data) => {
      setMyResponse({ data })
    })
  }, [])

  function handlePlace(res: PlaceResultProps) {
    if (res !== undefined) {
      setPlace(res)
    }
  }

  const handleToggleVisited = async (index: number) => {
    const updatedData = [...myResponse.data]
    const restaurant = updatedData[index]
    const { id, createdAt, updatedAt, ...rest } = restaurant
    const body = { id, ...rest }
    try {
      const response = await fetch(`/api/restaurant/${restaurant.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (response.status === 200) {
        const updatedEntry = await response.json()
        updatedData[index] = updatedEntry.data
        setMyResponse({ data: updatedData })
      } else {
        console.log('Failed to update the visited status')
      }
    } catch (error) {
      console.error('Request error', error)
    }
  }
  return (
    <GoogleMapsContainer>
      <PageLayout title="My List" className="bg-gray-300 pt-4">
        <div className="z-10 sticky top-0 px-4">
          <AutocompleteComponent getPlace={(place) => handlePlace(place)} />
        </div>
        <header className="pt-4 px-8 pb-2">
          <div className="pt-4 flex items-center justify-between">
            <button className="text-sm flex items-center space-x-1">
              <span>Sort</span>
              <span className={clsx('material-symbols-rounded text-base', {})}>
                sort
              </span>
            </button>
            <Link
              href="/map"
              className={clsx(
                'transition-all',
                'text-sm flex items-center space-x-1',
                'px-4 py-1 border bg-green-800/10 text-green-800 border-green-800 rounded-full',
                'hover:bg-green-800 hover:text-white'
              )}
            >
              <span>Map</span>
              <span className="material-symbols-rounded text-base">map</span>
            </Link>
          </div>
        </header>
        <main className="py-4 px-8 space-y-4">
          {myResponse.data?.map((res, index) => {
            const dateAdded = new Date(res.createdAt)

            return (
              <div
                key={index}
                className={clsx(
                  'relative',
                  'p-4 rounded shadow',
                  'bg-white',
                  'text-sm'
                )}
              >
                <div className="flex items-start">
                  <div className="mr-1">
                    <div
                      className={clsx('transition-all', {
                        'text-gray-400 ': !res.visited,
                        'text-green-700': res.visited,
                      })}
                    >
                      <span
                        className={clsx('material-symbols-rounded ', {
                          fill: res.visited,
                        })}
                      >
                        {res.visited ? 'beenhere' : 'notifications'}
                      </span>
                    </div>
                  </div>
                  <Link className="flex-1" href={res.website ?? ''}>
                    <h2 className="text-base font-medium">{res.name}</h2>
                  </Link>
                  <aside
                    className={clsx('pl-4 flex items-baseline', {
                      'text-red-700': !res.visited,
                      'text-green-700': res.visited,
                    })}
                  >
                    <span className="material-symbols-rounded text-xs">
                      add
                    </span>
                    <span>{calcTimeElapsed(dateAdded)}</span>
                  </aside>
                </div>
                <div className="pt-2">{res.formatted_address}</div>
                <div className="text-gray-700">
                  <span>{res.rating}</span>{' '}
                  <span>({res.user_ratings_total})</span>
                </div>
                <div className="flex items-center justify-end">
                  <Toggle
                    visited={res.visited}
                    onClick={() => handleToggleVisited(index)}
                  />
                </div>
              </div>
            )
          })}
        </main>
      </PageLayout>
    </GoogleMapsContainer>
  )
}
