import { PostProps } from "@/interfaces/post"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link"
import { PostCategory } from "./PostCategory"

interface HeroProps {
  post: PostProps
}

export function Hero({ post }: HeroProps) {
  return (
    <section className="max-w-[1216px] w-full mt-6">
      <Link href={`/blog/${post.slug}`}>
        <div className="w-full relative">
          <Image
            src={post.thumbnail}
            alt="Datacenter"
            width={1216}
            height={600}
            className="rounded-xl h-[600px]"
          />

          <div className="bg-white rounded-xl absolute p-10 w-[598px] border-1 shadow-lg shadow-secondary_100 border-[#E8E8EA] left-16 -bottom-16 dark:bg-secondary_800">
            <PostCategory />

            <h1 className="text-secondary_800 text-4xl mt-4 font-semibold dark:text-white">
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
                  <strong className="font-medium text-secondary_400 font-work_sans">
                    {post.user.name}
                  </strong>
                </div>
                <p className="text-secondary_400 font-normal">
                  {formatDate(post.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
