import { PageLayout } from '@/meta'
import { RestaurantStore } from '@prisma/client'
import { useEffect, useState } from 'react'

export function MyList() {
  const [myResponse, setMyResponse] = useState<{ data: RestaurantStore[] }>(
    {} as { data: RestaurantStore[] }
  )

  const readDb = async () => {
    try {
      const response = await fetch('/api/restaurant', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      setMyResponse(await response.json())
      if (response.status !== 200) {
        console.log('something went wrong')
      } else {
        console.log('data found!')
      }
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }
  useEffect(() => {
    readDb()
  }, [])

  console.log(myResponse)
  return (
    <PageLayout title="My List">
      <main>
        <table>
          <thead>
            {Object.keys(myResponse.data?.[0] ?? {}).map((key, index) => (
              <th
                className="text-xs border bg-gray-50 font-normal px-2 py-1"
                key={index}
              >
                <span>{key}</span>
              </th>
            ))}
          </thead>
          <tbody className="text-xs">
            {myResponse.data?.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-1">
                  <span>{item.name}</span>
                </td>
                <td className="px-2 py-1">
                  <span>{item.formatted_address}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </PageLayout>
  )
}
