import { Post } from "@prisma/client"
import Image from "next/image"
import { PostCategory } from "./PostCategory"

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div className="border-2 border-secondary_100 p-4 rounded-xl h-[488px]">
      <Image
        src={post.thumbnail}
        alt=""
        width={360}
        height={240}
        className="rounded-md w-[360px] h-[240px]"
      />

      <div className="flex flex-col p-2 mt-4">
        <PostCategory />

        <strong className="text-2xl text-secondary_800 font-semibold mt-4 leading-7">
          {post.title}
        </strong>

        <div className="flex items-center gap-5 mt-5">
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
  )
}
