import { useEffect, useState } from 'react'
import { AutocompleteComponent, Map, PlaceResultProps } from '../components'
import clsx from 'clsx'
import Link from 'next/link'
import { GoogleMapsContainer } from '../containers'
import { RestaurantOmits, createPlace } from '@/api/routes'

type LatLngProps = google.maps.LatLngLiteral

const DEFAULT_CENTER: LatLngProps = {
  lat: 49.2827291,
  lng: -123.1207375,
}

export function MapEdgePage() {
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
      const mapDetails: RestaurantOmits = {
        place_id: place.place_id ?? '',
        name: place.name ?? '',
        address: place.formatted_address ?? '',
        google_map_url: place.url ?? null,
        lat: place.geometry?.location?.lat() ?? null,
        lng: place.geometry?.location?.lng() ?? null,
      }
      createPlace(mapDetails)
    }
  }, [place])

  function handlePlace(res: PlaceResultProps) {
    if (res !== undefined) {
      setPlace(res)
    }
  }

  return (
    <GoogleMapsContainer>
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
    </GoogleMapsContainer>
  )
}
