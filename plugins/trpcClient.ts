import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { Router } from '~/server/trpc/routers'

export default defineNuxtPlugin(() => {
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const trpc = createTRPCNuxtClient<Router>({
    links: [
      httpBatchLink({
        url: 'api/trpc',
      })
    ],
  })

  return {
    provide: {
      trpc,
    },
  }
})
