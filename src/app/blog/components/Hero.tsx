import { PostCategory } from "@/components/PostCategory"
import { PostProps } from "@/interfaces/post"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link"

interface HeroProps {
  post: PostProps
}

export function Hero({ post }: HeroProps) {
  return (
    <section className="max-w-[1216px] w-full mt-6">
      <Link href={`/blog/${post.slug}`}>
        <div
          className="w-full h-[450px] p-10 flex flex-col items-start justify-end rounded-xl"
          style={{
            background: `url(${post.thumbnail}) no-repeat center`,
            backgroundSize: "cover"
          }}
        >
          <PostCategory title={post.category.title} />

          <h1 className="text-white text-4xl mt-4 font-semibold max-w-[63%] dark:text-white">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-col items-start">
            <div className="flex items-center gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src={post.user.userPhoto}
                  alt={post.user.name}
                  width={36}
                  height={36}
                  className="rounded-full w-9 h-9"
                />
                <strong className="font-medium text-white font-work_sans">
                  {post.user.name}
                </strong>
              </div>
              <p className="text-white font-normal">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
