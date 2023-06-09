import '~/styles/global.css'
// import type { AppProps } from 'next/app'
// import { trpc } from '@/server/trpc'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default trpc.withTRPC(MyApp)
import type { NextPage } from 'next'
import type { AppType, AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { trpc } from '~/modules/server/trpc'
import { PageLayout } from '~/modules/meta'

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)

  return getLayout(<Component {...pageProps} />)
}) as AppType

export default trpc.withTRPC(MyApp)
