import { PageLayout } from '~/modules/meta'
import { MobileList } from '../components'

export function MobilePage() {
  return (
    <PageLayout title="Mobile Page" className="bg-gray-300 pt-4">
      <MobileList />
    </PageLayout>
  )
}
