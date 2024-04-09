import { Post, User } from "@prisma/client"

export type PostProps = Post & {
  user: User
  category: {
    title: string
  }
}
