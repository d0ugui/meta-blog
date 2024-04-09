"use server"

import { prismaClient } from "@/lib/prisma"

interface GetLoadMorePostsProps {
  cursor: string
}

export async function loadMorePosts({ cursor }: GetLoadMorePostsProps) {
  const posts = await prismaClient.post.findMany({
    orderBy: [
      {
        createdAt: "desc"
      }
    ],
    take: 3,
    skip: 1,
    cursor: {
      id: cursor
    },
    include: {
      user: true,
      category: {
        select: {
          title: true
        }
      }
    }
  })

  return posts
}
