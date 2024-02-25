import { createRouter } from '../trpc'
import { router as food } from './food'

export const router = createRouter({
  food,
})

export type Router = typeof router
