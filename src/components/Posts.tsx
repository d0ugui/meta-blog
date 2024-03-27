import { cn } from "@/utils/cn"
import { Post } from "@prisma/client"
import { PostItem } from "./PostItem"

interface PostsProps {
  className?: string
  posts: Array<Post>
}

export function Posts({ className, posts }: PostsProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-5 mt-8", className)}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
