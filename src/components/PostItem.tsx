import { PostProps } from "@/entities/post"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import { PostCategory } from "./PostCategory"

interface PostItemProps {
  post: PostProps
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

        <strong className="text-2xl text-secondary_800 font-semibold mt-4 leading-7 line-clamp-3">
          {post.title}
        </strong>

        <div className="flex items-center gap-5 mt-5">
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
  )
}
