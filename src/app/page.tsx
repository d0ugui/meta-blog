import { Hero } from "@/components/Hero"
import { Posts } from "@/components/Posts"
import { postsService } from "@/services/postsService"
import Link from "next/link"

export default async function Home() {
  const { posts } = await postsService.getAll({})

  const heroPost = posts.shift()

  return (
    <main>
      <Hero post={heroPost!} />

      <section className="mt-24 max-w-[1216px] flex flex-col">
        <h2 className="text-2xl font-bold">Latest Post</h2>

        <Posts posts={posts} />

        <Link
          href="/blog"
          className="px-4 py-3 border-2 border-secondary_100 rounded-md text-[#696A75] mt-8 w-fit mx-auto"
        >
          View All Post
        </Link>
      </section>
    </main>
  )
}
