import { prismaClient } from "@/lib/prisma"

export async function getPostsBySearch(search: string) {
  const posts = await prismaClient.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive"
          }
        }
      ]
    },
    include: {
      user: true
    }
  })

  return posts
}
