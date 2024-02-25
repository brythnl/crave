import { createNuxtApiHandler } from 'trpc-nuxt'
import { router } from '~/server/trpc/routers'
import { createContext } from '~/server/trpc/context'

// export API handler for interface between server and client
export default createNuxtApiHandler({ router, createContext })
