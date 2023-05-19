import { RestaurantStore } from '@prisma/client'

export interface ReadDbProps {
  data: RestaurantStore[]
}

export const readDb = async (getData: (data: RestaurantStore[]) => void) => {
  try {
    const response = await fetch('/api/restaurant', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const data = (await response.json()) as ReadDbProps

    if (response.status !== 200) {
      console.log('something went wrong')
    } else {
      console.log('data found!')
      getData(data.data)
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}

// Omit 'id', 'createdAt', and 'updatedAt' from the type
export type OmitIdCreatedAtUpdatedAt<T> = Omit<
  T,
  'id' | 'createdAt' | 'updatedAt'
>

// Usage example: omit 'id', 'createdAt', and 'updatedAt' from RestaurantStore
export type RestaurantStoreWithoutId = OmitIdCreatedAtUpdatedAt<RestaurantStore>

export const createPlace = async (props: RestaurantStoreWithoutId) => {
  const body: RestaurantStoreWithoutId = { ...props }
  try {
    const response = await fetch('/api/restaurant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (response.status !== 200) {
      console.log('something went wrong')
    } else {
      console.log('submitted')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}
