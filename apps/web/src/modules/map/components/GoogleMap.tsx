import { GoogleMap, GoogleMapProps } from '@react-google-maps/api'

export type MapOptionsProps = google.maps.MapOptions

type OmitMapProps<T> = Omit<T, 'options' | 'mapContainerClassName'>
export type MapProps = OmitMapProps<GoogleMapProps>

export function Map(props: MapProps) {
  const mapOptions: MapOptionsProps = {
    clickableIcons: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM, // 'right-center' ,
    },
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
  }

  return (
    <GoogleMap
      {...props}
      options={mapOptions}
      mapContainerClassName="w-full h-full"
    />
  )
}
