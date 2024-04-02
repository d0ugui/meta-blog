import { Posts } from "@/components/Posts"
import { postsService } from "@/services/postsService"
import Image from "next/image"
import Link from "next/link"

export default async function Contact() {
  const { posts } = await postsService.getAll({ maxSize: 6 })

  return (
    <section className="max-w-[1216px] w-full flex flex-col">
      <div className="flex flex-col items-center gap-6 bg-secondary_50 py-12 w-full">
        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/63167055?v=4"
            alt=""
            width={64}
            height={64}
            className="rounded-full w-16 h-16"
          />

          <div>
            <strong className="font-medium text-secondary_800 font-work_sans text-xl">
              Jonathan Doe
            </strong>
            <p className="text-secondary_500 text-sm">Collaborator & Editor</p>
          </div>
        </div>

        <div className="max-w-[668px]">
          <p className="text-center text-lg leading-[26px]">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://www.facebook.com"
            className="bg-secondary_500 p-[9px] rounded-md h-[32px] flex items-center"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Logo"
              width={14}
              height={14}
            />
          </Link>

          <Link
            href="https://twitter.com"
            className="bg-secondary_500 p-[9px] rounded-md h-[32px] flex items-center"
          >
            <Image
              src="/icons/twitter.svg"
              alt="Twitter Logo"
              width={15}
              height={12}
            />
          </Link>

          <Link
            href="https://www.instagram.com"
            className="bg-secondary_500 p-[9px] rounded-md h-[32px] flex items-center"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Logo"
              width={14}
              height={14}
            />
          </Link>

          <Link
            href="https://www.youtube.com"
            className="bg-secondary_500 p-[9px] rounded-md h-[32px] flex items-center"
          >
            <Image
              src="/icons/youtube.svg"
              alt="Youtube Logo"
              width={14}
              height={14}
            />
          </Link>
        </div>
      </div>

      <h2 className="mt-12 font-bold text-2xl">Latest Posts</h2>
      <Posts posts={posts} />
    </section>
  )
}
