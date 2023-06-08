import '~/styles/global.css'
import type { AppProps } from 'next/app'
import { trpc } from '@/server/trpc'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default trpc.withTRPC(MyApp)
