/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { prisma } from './prisma'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  prisma: typeof prisma
}

export async function createContextInner(opts: CreateContextOptions) {
  return {
    prisma: opts.prisma,
  }
}
export type Context = trpc.inferAsyncReturnType<typeof createContextInner>

export async function createContext(
  opts: trpcNext.CreateNextContextOptions
): Promise<Context> {
  return await createContextInner({ prisma })
}
