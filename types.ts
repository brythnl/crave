import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import type { Router } from '~/server/trpc/routers'

type RouterInput = inferRouterInputs<Router>
export type RouterOutput = inferRouterOutputs<Router>
export type ApiFoodGetAll = RouterOutput['food']['getAll']
