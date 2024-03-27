import { Post } from "@prisma/client"
import Image from "next/image"
import { PostCategory } from "./PostCategory"

interface HeroProps {
  post: Post
}

export function Hero({ post }: HeroProps) {
  return (
    <section className="max-w-[1216px] w-full mt-6">
      <div className="w-full relative">
        <Image
          src={post.thumbnail}
          alt="Datacenter"
          width={1216}
          height={600}
          className="rounded-xl h-[600px]"
        />

        <div className="bg-white rounded-xl absolute p-10 w-[598px] border-1 shadow-lg shadow-secondary_100 border-[#E8E8EA] left-16 -bottom-16">
          <PostCategory />

          <h1 className="text-secondary_800 text-4xl mt-4 font-semibold">
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
                <strong className="font-medium text-secondary_400 font-work_sans">
                  Jason Francisco
                </strong>
              </div>
              <p className="text-secondary_400 font-normal">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
