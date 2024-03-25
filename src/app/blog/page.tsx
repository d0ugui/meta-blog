import { Posts } from "@/components/Posts"
import { Hero } from "./components/Hero"

export default function Blog() {
  return (
    <section className="max-w-[1216px] w-full flex flex-col items-center">
      <h1 className="text-center font-semibold text-3xl">Page Title</h1>

      <Hero />

      <Posts className="mt-12" />

      <button className="px-4 py-3 border-2 border-secondary_100 rounded-md text-[#696A75] mt-8">
        Load more
      </button>
    </section>
  )
}
