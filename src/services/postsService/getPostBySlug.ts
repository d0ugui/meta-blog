import { prismaClient } from "@/lib/prisma"

export async function getPostBySlug(postSlug: string) {
  const post = await prismaClient.post.findFirst({
    where: {
      slug: postSlug
    },
    include: {
      user: true
    }
  })

  return {
    post
  }
}
