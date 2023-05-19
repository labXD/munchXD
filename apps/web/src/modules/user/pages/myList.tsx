import { PageLayout } from '@/meta'
import { useEffect, useState } from 'react'
import { ReadDbProps, readDb } from '@/api/routes'
import clsx from 'clsx'
import { calcTimeElapsed } from '../utils'
import Link from 'next/link'
import {
  AutocompleteComponent,
  PlaceResultProps,
  PlacesAutocomplete,
  PostPlace,
  RestaurantStoreWithoutId,
} from '~/modules/map/components'
import { useLoadScript } from '@react-google-maps/api'

export function MyList() {
  const [myResponse, setMyResponse] = useState<ReadDbProps>({
    data: [],
  })
  const [place, setPlace] = useState<PlaceResultProps>()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places'],
  })

  useEffect(() => {
    readDb((data) => {
      setMyResponse({ data })
    })
  }, [])

  useEffect(() => {
    if (place !== undefined) {
      const mapDetails: RestaurantStoreWithoutId = {
        place_id: place.place_id ?? '',
        name: place.name ?? '',
        business_status: place.business_status ?? '',
        formatted_address: place.formatted_address ?? '',
        price_level: place.price_level ?? null,
        website: place.website ?? null,
        google_map_url: place.url ?? null,
        rating: place.rating ?? null,
        user_ratings_total: place.user_ratings_total ?? null,
        lat: place.geometry?.location?.lat() ?? null,
        lng: place.geometry?.location?.lng() ?? null,
        visited: false,
      }
      PostPlace(mapDetails)
    }
  }, [place])

  if (!isLoaded) return <div>loading...</div>

  function handlePlace(res: PlaceResultProps) {
    if (res !== undefined) {
      setPlace(res)
    }
  }
  return (
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
                  <span className="material-symbols-rounded text-xs">add</span>
                  <span>{calcTimeElapsed(dateAdded)}</span>
                </aside>
              </div>
              <div className="pt-2">{res.formatted_address}</div>
              <div className="text-gray-700">
                <span>{res.rating}</span>{' '}
                <span>({res.user_ratings_total})</span>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className={clsx(
                    'transition-all relative h-8',
                    'before:absolute before:-left-2 before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:content-["visited?_"] before:leading-0',
                    {
                      'text-gray-400 ': !res.visited,
                      'text-green-700': res.visited,
                    }
                  )}
                >
                  <span
                    className={clsx(
                      'material-symbols-rounded text-[32px] leading-0',
                      {
                        fill: res.visited,
                      }
                    )}
                  >
                    {res.visited ? 'toggle_on' : 'toggle_off'}
                  </span>
                </button>
              </div>
            </div>
          )
        })}
      </main>
    </PageLayout>
  )
}
