import { PostCategory } from "@/components/PostCategory"
import { Post } from "@prisma/client"
import Image from "next/image"

interface HeroProps {
  post: Post
}

export function Hero({ post }: HeroProps) {
  return (
    <section className="max-w-[1216px] w-full mt-6">
      <div
        className="w-full h-[450px] p-10 flex flex-col items-start justify-end rounded-xl"
        style={{
          backgroundImage: `url(${post.thumbnail})`
        }}
      >
        <PostCategory />

        <h1 className="text-white text-4xl mt-4 font-semibold max-w-[63%]">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-col items-start">
          <div className="flex items-center gap-5">
            <div className="flex gap-3 items-center">
              <Image
                src="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg"
                alt=""
                width={0}
                height={0}
                className="rounded-full w-9 h-9"
              />
              <strong className="font-medium text-white font-work_sans">
                Jason Francisco
              </strong>
            </div>
            <p className="text-white font-normal">August 20, 2022</p>
          </div>
        </div>
      </div>
    </section>
  )
}
