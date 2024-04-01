import { cn } from "@/utils/cn"

import { PostProps } from "@/entities/post"
import { PostItem } from "./PostItem"

interface PostsProps {
  className?: string
  posts: Array<PostProps>
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
