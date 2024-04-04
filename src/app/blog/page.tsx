import { Posts } from "@/components/Posts"
import { postsService } from "@/services/postsService"
import { Hero } from "./components/Hero"

export default async function Blog() {
  const { posts, count } = await postsService.getInitialPosts({})

  const heroPost = posts.shift()

  return (
    <section className="max-w-[1216px] w-full flex flex-col items-center">
      <h1 className="text-center font-semibold text-3xl dark:text-white">
        Page Title
      </h1>

      <Hero post={heroPost!} />

      <Posts
        className="mt-12"
        initialPosts={posts}
        loadMore
        totalPosts={count}
      />
    </section>
  )
}
