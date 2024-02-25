import { initTRPC } from '@trpc/server';
import type { Context } from '~/server/trpc/context'

export const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure

export const createRouter = t.router
export const middleware = t.middleware
