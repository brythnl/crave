import { prisma } from '~/server/prisma'

async function main() {
  const chicken = await prisma.food.upsert({
    where: { name: "Chicken" },
    update: {},
    create: {
      name: "Chicken"
    }
  })
  console.log(chicken)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
