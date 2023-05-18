import { RestaurantStore } from '@prisma/client'

export type RestaurantStoreWithoutId = Omit<RestaurantStore, 'id'>

export async function PostPlace(props: RestaurantStoreWithoutId) {
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
      console.log('form submitted successfully !!!')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}
