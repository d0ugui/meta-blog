import { Hero } from "@/components/Hero"
import { Posts } from "@/components/Posts"

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mt-24 max-w-[1200px] flex flex-col items-center">
        <h2 className="text-2xl font-bold">Latest Post</h2>

        <Posts />

        <button className="px-4 py-3 border-2 border-secondary_100 rounded-md text-[#696A75] mt-8 w-fit">
          View All Post
        </button>
      </section>
    </main>
  )
}
