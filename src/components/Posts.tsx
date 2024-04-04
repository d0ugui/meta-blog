"use client"

import { cn } from "@/utils/cn"

import { loadMorePosts } from "@/actions/loadMorePosts"
import { PostProps } from "@/interfaces/post"
import { useState } from "react"
import { PostItem } from "./PostItem"
import { Spinner } from "./Spinner"

interface PostsProps {
  className?: string
  initialPosts: Array<PostProps>
  loadMore?: boolean
  totalPosts?: number
}

export function Posts({
  className,
  initialPosts,
  loadMore = false,
  totalPosts
}: PostsProps) {
  const [posts, setPosts] = useState<Array<PostProps>>(initialPosts)
  const [isLoading, setIsLoading] = useState(false)

  async function LoadMorePosts() {
    setIsLoading(true)

    const morePosts = await loadMorePosts({
      cursor: posts[posts.length - 1].id
    })

    if (morePosts) {
      setPosts((prevState) => [...prevState, ...morePosts])
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={cn("grid grid-cols-3 gap-5 mt-8", className)}>
        {posts?.map((post) => <PostItem key={post.id} post={post} />)}
      </div>

      {loadMore && posts.length + 1 < totalPosts! && !isLoading && (
        <button
          className="px-4 py-3 border-2 border-secondary_100 rounded-md text-[#696A75] mt-8 dark:border-secondary_700"
          onClick={LoadMorePosts}
        >
          Load more
        </button>
      )}

      {isLoading && (
        <div className="mt-6">
          <Spinner />
        </div>
      )}
    </>
  )
}
