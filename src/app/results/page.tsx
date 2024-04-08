import { Posts } from "@/components/Posts"
import { postsService } from "@/services/postsService"

export default async function Results({
  searchParams
}: {
  searchParams: {
    search: string
  }
}) {
  const posts = await postsService.getPostsBySearch(searchParams.search)

  return (
    <div className="max-w-[1216px] m-auto">
      <div>
        <h1 className="font-semibold text-2xl dark:text-white">
          Results for {searchParams.search}
        </h1>

        <Posts initialPosts={posts} />
      </div>
    </div>
  )
}
