import { Autocomplete } from '@react-google-maps/api'
import clsx from 'clsx'
import { useState } from 'react'

export type AutoOptionsProps = google.maps.places.AutocompleteOptions
export type AutocompleteProps = google.maps.places.Autocomplete
export type PlaceResultProps = google.maps.places.PlaceResult

interface AutocompleteComponentProps {
  getPlace: (place: PlaceResultProps) => void
}
export function AutocompleteComponent(props: AutocompleteComponentProps) {
  const [autocomplete, setAutocomplete] = useState<AutocompleteProps>()

  const autoOptions: AutoOptionsProps = {
    types: ['establishment'],
  }

  //Autocomplete function onLoad Handler
  const onAutoLoad = (autocomplete: AutocompleteProps) => {
    setAutocomplete(autocomplete)
  }

  //Function triggered when place is changed
  function onPlaceChanged() {
    if (autocomplete !== undefined) {
      props.getPlace(autocomplete.getPlace())
    }
  }

  return (
    <Autocomplete
      className={clsx('relative', 'h-12 flex rounded', 'bg-white')}
      options={autoOptions}
      onLoad={onAutoLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        className={clsx(
          'w-full pl-4 pr-8 outline-none shadow',
          'bg-transparent'
        )}
      />
    </Autocomplete>
  )
}
