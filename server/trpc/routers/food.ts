import { z } from 'zod'
import { prisma } from '~/server/prisma'
import { publicProcedure, createRouter } from '../trpc'

export const router = createRouter({
  getAll: publicProcedure.input(z.any()).query(async ({ ctx, input }) => {
    const foods = await prisma.food.findMany()

    return {
      foods,
    }
  }),
})
