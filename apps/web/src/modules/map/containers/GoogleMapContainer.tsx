import { useLoadScript } from '@react-google-maps/api'
import { ReactNode } from 'react'

interface GoogleMapsContainerProps {
  children: ReactNode
}

export function GoogleMapsContainer({ children }: GoogleMapsContainerProps) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries: ['places'],
  })

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  if (!isLoaded) return <div>loading...</div>

  return <>{children}</>
}
