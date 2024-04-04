"use client"

import { Mail } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <footer className="w-full bg-[#E8E8EA] mt-20 font-jakarta_sans dark:bg-secondary_900">
      <div className="max-w-[1216px] w-full m-auto mt-16 flex items-start justify-between">
        <div>
          <strong className="text-lg font-semibold dark:text-white">
            About
          </strong>
          <p className="text-secondary_500 mt-3 max-w-[280px] dark:text-secondary_300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <p className="mt-6 dark:text-secondary_300">
            <span className="font-semibold dark:text-white">Email: </span>
            info@jstemplate.net
          </p>
          <p className="dark:text-secondary_300 ">
            <span className="font-semibold dark:text-white">Phone: </span>880
            123 456 789
          </p>
        </div>

        <div className="flex items-center justify-center gap-20 ">
          <div>
            <strong className="font-semibold text-lg">Quick Link</strong>
            <ul className="mt-6 text-[#3B3C4A] flex flex-col gap-2 dark:text-secondary_300">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Archived</li>
              <li>Author</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Category</h3>
            <ul className="mt-6 text-[#3B3C4A] flex flex-col gap-2 dark:text-secondary_300">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>
        </div>

        <div className="bg-white px-9 py-8 rounded-xl dark:bg-secondary_700">
          <div className="text-center">
            <span className="text-xl text-[#181A2A] font-semibold leading-5 dark:text-white">
              Weekly Newsletter
            </span>
            <p className="text-[#696A75] mt-2 dark:text-secondary_300">
              Get blog articles and offers via email
            </p>
          </div>

          <div className="mt-[30px]">
            <label className="flex border-2 border-[#DCDDDF] rounded-md px-4 py-3 items-center h-[48px] gap-[10px] w-[320px] dark:border-secondary_600 dark:bg-secondary_800">
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none flex-1 dark:text-secondary_300 dark:bg-secondary_800"
              />

              <div className="text-secondary_500">
                <Mail size={20} />
              </div>
            </label>

            <button className="bg-primary text-white font-work_sans font-medium py-3 px-[120px] rounded-md mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] w-full m-auto flex items-center justify-between py-8 border-t-2 border-[#DCDDDF] mt-16 dark:border-secondary_700">
        <div className="flex gap-2">
          <Image
            src={
              resolvedTheme === "dark"
                ? "/assets/light-logo.svg"
                : "/assets/dark-logo.svg"
            }
            alt="Logo"
            width={48}
            height={48}
          />

          <div>
            <p className="text-xl">
              Meta
              <span className="font-extrabold text-secondary_900 dark:text-white">
                Blog
              </span>
            </p>
            <p>
              © JS Template{" "}
              <span className="dark:text-secondary_300">
                2023. All Rights Reserved.
              </span>
            </p>
          </div>
        </div>

        <ul className="flex gap-8 text-secondary_600 dark:text-secondary_300">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  )
}
