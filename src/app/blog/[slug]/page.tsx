import { PostCategory } from "@/components/PostCategory"
import { postsService } from "@/services/postsService"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"

export default async function PageDetails({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { post } = await postsService.getPostBySlug(slug)

  if (!post) {
    return
  }

  return (
    <div className="mt-8 max-w-[800px] w-full">
      <PostCategory title={post.category.title} />

      <h1 className="font-semibold text-4xl mt-4">{post.title}</h1>

      <div className="flex gap-3 items-center mt-5">
        <Image
          src={post.user.userPhoto}
          alt={post.user.name}
          width={36}
          height={36}
          className="rounded-full w-9 h-9"
        />

        <strong className="font-medium text-secondary_400 font-work_sans">
          {post.user.name}
        </strong>

        <p className="text-secondary_400 font-normal">
          {formatDate(post.createdAt)}
        </p>
      </div>

      <div className="mt-8">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={462}
          className="rounded-lg"
        />

        <p className="mt-8">{post.content}</p>
      </div>
    </div>
  )
}
