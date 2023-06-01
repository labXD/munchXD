import { PrismaClient, Reminder, Restaurant, Visit } from '@prisma/client'

export interface ReadDbProps {
  data: Restaurant[]
}

export const readDb = async (getData: (data: Restaurant[]) => void) => {
  try {
    const response = await fetch('/api/restaurants', {
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

type OmitIdCreatedAtUpdatedAt<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>

export type RestaurantOmits = OmitIdCreatedAtUpdatedAt<Restaurant>
export type VisitOmits = OmitIdCreatedAtUpdatedAt<Visit>
export type ReminderOmits = OmitIdCreatedAtUpdatedAt<Reminder>

export const createPlace = async (props: RestaurantOmits) => {
  const body: RestaurantOmits = { ...props }
  try {
    const response = await fetch('/api/restaurants', {
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

export const createVisit = async (props: VisitOmits) => {
  const body: VisitOmits = { ...props }
  try {
    const response = await fetch(
      `/api/restaurants/${body.restaurantId}/visits`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    )
    if (response.status !== 200) {
      console.log('something went wrong')
    } else {
      console.log('submitted visit')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}

export const createReminder = async (props: ReminderOmits) => {
  const body: ReminderOmits = { ...props }
  try {
    const response = await fetch(
      `/api/restaurants/${body.restaurantId}/reminders`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    )
    if (response.status !== 200) {
      console.log('something went wrong')
    } else {
      console.log('submitted reminder')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}

export const deletePlace = async (id: number) => {
  try {
    const response = await fetch(`/api/restaurants/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      console.log('Record deleted successfully')
    } else {
      console.error('Error deleting record')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}

export const deleteVisit = async (id: number, visitId: number) => {
  try {
    const response = await fetch(`/api/restaurants/${id}/visits/${visitId}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      console.log('Record deleted successfully')
    } else {
      console.error('Error deleting record')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}

export const deleteReminder = async (id: number, reminderId: number) => {
  try {
    const response = await fetch(
      `/api/restaurants/${id}/reminders/${reminderId}`,
      {
        method: 'DELETE',
      }
    )
    if (response.ok) {
      console.log('Record deleted successfully')
    } else {
      console.error('Error deleting record')
    }
  } catch (error) {
    console.log('there was an error submitting', error)
  }
}
