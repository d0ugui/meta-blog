import { prismaClient } from "@/lib/prisma"

interface GetInitialPostsProps {
  numOfPosts?: number
}

export async function getInitialPosts({
  numOfPosts = 7
}: GetInitialPostsProps) {
  const posts = await prismaClient.post.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    take: numOfPosts,
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
