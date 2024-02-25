import { useQuery } from "@tanstack/vue-query"

export default () => {
  const { $trpc } = useNuxtApp()

  return {
    food: {
      all: () => useQuery({
        queryKey: ['foods'],
        queryFn: () => $trpc.food.getAll.query(),
      }),
    },
  } as const
}
