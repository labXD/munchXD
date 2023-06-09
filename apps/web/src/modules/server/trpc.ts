import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { appRouter } from './generated/routers'
import { NextPageContext } from 'next'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''

  if (process.env.URL)
    // reference for vercel.com
    return `https://${process.env.URL}`

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @example
   * const utils = trpc.useContext();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number
}

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export const trpc = createTRPCNext<
  typeof appRouter,
  SSRContext,
  'ExperimentalSuspense'
>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          headers: () => ({
            cookie: ctx?.req?.headers?.cookie ?? '',
          }),
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
})
// => { useQuery: ..., useMutation: ...}
