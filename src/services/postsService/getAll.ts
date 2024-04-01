import { prismaClient } from "@/lib/prisma"

interface GetAllProps {
  maxSize?: number
}

export async function getAll({ maxSize = 7 }: GetAllProps) {
  const posts = await prismaClient.post.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    take: maxSize,
    include: {
      user: true
    }
  })

  const count = await prismaClient.post.count()

  return {
    posts,
    count
  }
}
