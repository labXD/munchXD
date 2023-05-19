import { useLoadScript } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import {
  AutocompleteComponent,
  PlaceResultProps,
  PostPlace,
  RestaurantStoreWithoutId,
} from '../components'
import { Map } from '../components/GoogleMap'
import clsx from 'clsx'
import Link from 'next/link'

type LatLngProps = google.maps.LatLngLiteral

const DEFAULT_CENTER: LatLngProps = {
  lat: 49.2827291,
  lng: -123.1207375,
}

export function MapEdgePage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places'],
  })

  const [zoom, setZoom] = useState<number>(15)
  const [currentPosition, setCurrentPosition] =
    useState<LatLngProps>(DEFAULT_CENTER)

  const [place, setPlace] = useState<PlaceResultProps>()

  useEffect(() => {
    if (place !== undefined) {
      if (place?.geometry?.location !== undefined) {
        setCurrentPosition({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        })
        setZoom(20)
      }
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

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  if (!isLoaded) return <div>loading...</div>

  function handlePlace(res: PlaceResultProps) {
    if (res !== undefined) {
      setPlace(res)
    }
  }

  return (
    <div className="h-screen relative">
      <Map center={currentPosition} zoom={zoom}>
        <div
          className={clsx(
            'fixed top-2 left-2 right-2 z-10',
            'lg:w-full lg:max-w-[400px]'
          )}
        >
          <AutocompleteComponent getPlace={(place) => handlePlace(place)} />
          <div className="absolute -bottom-2 lg:bottom-[unset] translate-y-full lg:translate-y-0 lg:-right-2 lg:top-0 lg:translate-x-full">
            <Link
              href="/"
              className={clsx(
                'transition-all h-12',
                'flex items-center px-4 rounded-sm text-lg',
                'bg-white shadow',
                'hover:bg-gray-100'
              )}
            >
              <span>My List</span>
            </Link>
          </div>
        </div>
      </Map>
    </div>
  )
}
