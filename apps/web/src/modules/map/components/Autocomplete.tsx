import { Autocomplete } from '@react-google-maps/api'
import clsx from 'clsx'
import { useRef, useState } from 'react'

export type AutoOptionsProps = google.maps.places.AutocompleteOptions
export type AutocompleteProps = google.maps.places.Autocomplete
export type PlaceResultProps = google.maps.places.PlaceResult

interface AutocompleteComponentProps {
  getPlace: (place: PlaceResultProps) => void
  className?: string
}

export function AutocompleteComponent(props: AutocompleteComponentProps) {
  const inputRef = useRef<HTMLInputElement>(null)
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
      //   if (inputRef.current) {
      //     inputRef.current.value = '' // Clear the input value
      //   }
    }
  }

  return (
    <Autocomplete
      className={clsx(
        props.className,
        'relative',
        'h-12 flex rounded',
        'bg-white',
        'focus-within:ring focus-within:ring-inset focus-within:ring-blue-600'
      )}
      options={autoOptions}
      onLoad={onAutoLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        ref={inputRef}
        autoFocus
        type="text"
        className={clsx(
          'w-full pl-4 pr-8 outline-none shadow',
          'bg-transparent'
        )}
      />
    </Autocomplete>
  )
}
