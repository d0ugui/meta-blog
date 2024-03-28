import { Posts } from "@/components/Posts"
import { postsService } from "@/services/postsService"
import { Hero } from "./components/Hero"

export default async function Blog() {
  const { posts } = await postsService.getAll({})

  const heroPost = posts.shift()

  return (
    <section className="max-w-[1216px] w-full flex flex-col items-center">
      <h1 className="text-center font-semibold text-3xl">Page Title</h1>

      <Hero post={heroPost!} />

      <Posts className="mt-12" posts={posts} />

      <button className="px-4 py-3 border-2 border-secondary_100 rounded-md text-[#696A75] mt-8">
        Load more
      </button>
    </section>
  )
}
